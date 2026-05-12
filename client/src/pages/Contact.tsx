import SoftBackdrop from "../components/SoftBackdrop";

export default function Contact() {
  return (
    <>
    <SoftBackdrop />

    <div className="mt-32 min-h-screen text-white px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">


        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-pink-500">Us</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions, suggestions, or feedback? We'd love to hear from
            you. Reach out and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-[0_0_25px_rgba(236,72,153,0.08)]">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="text-lg font-medium">
                  contact@thumblify.com
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">LinkedIn</p>
                <p className="text-lg font-medium">
                  linkedin.com/in/yourprofile
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">GitHub</p>
                <p className="text-lg font-medium">
                  github.com/yourgithub
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">Location</p>
                <p className="text-lg font-medium">India</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-[0_0_25px_rgba(236,72,153,0.08)]">
            <h2 className="text-3xl font-bold mb-8">Send Message</h2>

            <form className="space-y-5">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-pink-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-pink-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-pink-500 transition"
                />
              </div>

              <button
                type="submit"
                className="text-[15px] w-full py-3.5 rounded-xl font-medium bg-linear-to-b from-pink-500 to-pink-600 hover:from-pink-700 border border-pink-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
