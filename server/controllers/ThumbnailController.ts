import { Request, Response } from 'express';
import Thumbnail from '../models/Thumbnail.js';
import ai from '../configs/ai.js';
import { v2 as cloudinary } from 'cloudinary';

const stylePrompts = {
    'Bold & Graphic': 'eye-catching thumbnail, bold typography, vibrant colors, expressive facial reaction, dramatic lighting, high contrast, click-worthy composition, professional style',
    'Tech/Futuristic': 'futuristic thumbnail, sleek modern design, digital UI elements, glowing accents, holographic effects, cyber-tech aesthetic, sharp lighting, high-tech atmosphere',
    'Minimalist': 'minimalist thumbnail, clean layout, simple shapes, limited color palette, plenty of negative space, modern flat design, clear focal point',
    'Photorealistic': 'photorealistic thumbnail, ultra-realistic lighting, natural skin tones, candid moment, DSLR-style photography, lifestyle realism, shallow depth of field',
    'Illustrated': 'illustrated thumbnail, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
};

const colorSchemeDescriptions = {
    vibrant: 'vibrant and energetic colors, high saturation, bold contrasts, eye-catching palette',
    sunset: 'warm sunset tones, orange pink and purple hues, soft gradients, cinematic glow',
    forest: 'natural green tones, earthy colors, calm and organic palette, fresh atmosphere',
    neon: 'neon glow effects, electric blues and pinks, cyberpunk lighting, high contrast glow',
    purple: 'purple-dominant color palette, magenta and violet tones, modern and stylish mood',
    monochrome: 'black and white color scheme, high contrast, dramatic lighting, timeless aesthetic',
    ocean: 'cool blue and teal tones, aquatic color palette, fresh and clean atmosphere',
    pastel: 'soft pastel colors, low saturation, gentle tones, calm and friendly aesthetic',
};

const getSizeFromAspectRatio = (aspectRatio: string) => {
    if (aspectRatio === '1:1') return { width: 1024, height: 1024 };
    if (aspectRatio === '9:16') return { width: 720, height: 1280 };
    return { width: 1280, height: 720 };
};

export const generateThumbnail = async (req: Request, res: Response) => {
    let thumbnail: any = null;

    try {
        const { userId } = req.session;
        const { title, prompt: user_prompt, style, aspect_ratio, color_scheme, text_overlay } = req.body;

        thumbnail = await Thumbnail.create({
            userId,
            title,
            prompt_used: user_prompt,
            user_prompt,
            style,
            aspect_ratio,
            color_scheme,
            text_overlay,
            isGenerating: true,
        });

        let prompt = `Create a ${stylePrompts[style as keyof typeof stylePrompts] || stylePrompts['Bold & Graphic']} for: "${title}". `;

        if (color_scheme) {
            prompt += `Use a ${colorSchemeDescriptions[color_scheme as keyof typeof colorSchemeDescriptions] || color_scheme} color scheme. `;
        }

        if (user_prompt) {
            prompt += `Additional details: ${user_prompt}. `;
        }

        prompt += `The thumbnail should be ${aspect_ratio || '16:9'}, visually stunning, professional, and designed to maximize click-through rate.`;

        const response: any = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Improve this into a short, clear AI image generation prompt. Do not add explanation. Prompt: ${prompt}`,
        });

        const enhancedPrompt =
            response?.text ||
            response?.candidates?.[0]?.content?.parts?.[0]?.text ||
            prompt;

        const { width, height } = getSizeFromAspectRatio(aspect_ratio || '16:9');

        const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
            enhancedPrompt
        )}?width=${width}&height=${height}&seed=${Date.now()}&nologo=true`;

        const uploadResult = await cloudinary.uploader.upload(pollinationsUrl, {
            resource_type: 'image',
        });

        thumbnail.image_url = uploadResult.secure_url;
        thumbnail.prompt_used = enhancedPrompt;
        thumbnail.isGenerating = false;
        await thumbnail.save();

        res.json({ message: 'Thumbnail Generated', thumbnail });
    } catch (error: any) {
        console.log(error);

        if (thumbnail) {
            thumbnail.isGenerating = false;
            await thumbnail.save();
        }

        res.status(500).json({
            message: error.message || 'Thumbnail generation failed',
        });
    }
};

export const deleteThumbnail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { userId } = req.session;

        await Thumbnail.findByIdAndDelete({ _id: id, userId });

        res.json({ message: 'Thumbnail deleted successfully' });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
