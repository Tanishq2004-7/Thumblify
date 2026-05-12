import SoftBackdrop from "../components/SoftBackdrop";

export default function About() {
  return (
    <>
    <SoftBackdrop />

    <div className="mt-32 min-h-screen text-white px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-pink-500">Thumblify</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Thumblify is an AI-powered thumbnail generator that helps creators,
            streamers, and marketers generate eye-catching thumbnails in
            seconds using the power of Google Gemini AI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.08)] transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>

            <h2 className="text-2xl font-semibold mb-4">Fast Generation</h2>

            <p className="text-gray-400 leading-relaxed">
              Generate high-quality AI thumbnails instantly with optimized
              prompts and smart image processing.
            </p>
          </div>

          <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.08)] transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>

            <h2 className="text-2xl font-semibold mb-4">AI Powered</h2>

            <p className="text-gray-400 leading-relaxed">
              Built using Google Gemini API, React, Node.js, Express, and
              MongoDB for intelligent and scalable generation.
            </p>
          </div>

          <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.08)] transition-all duration-300">
            <div className="text-4xl mb-4">🎨</div>

            <h2 className="text-2xl font-semibold mb-4">Modern UI</h2>

            <p className="text-gray-400 leading-relaxed">
              Designed with a sleek and responsive interface for a smooth user
              experience across all devices.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white/6 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-[0_0_25px_rgba(236,72,153,0.08)] mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Google Gemini",
              "Cloudinary",
              "TypeScript",
            ].map((tech) => (
              <div
                key={tech}
                 className="bg-black/40 border border-white/10 rounded-2xl py-4 px-3 hover:border-pink-500 transition"
              >
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center max-w-4xl mx-auto pb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-pink-500">Mission</span> 
            </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our mission is to simplify thumbnail creation using AI so creators
            can focus more on content and less on design complexity. Thumblify
            helps users create engaging visuals quickly without requiring
            advanced editing skills.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
