"use client"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#d8f3dc] to-[#b7e4c7] flex flex-col items-center overflow-x-hidden text-gray-900 font-[Nunito_Sans]">
      {/* ---------- NAVBAR ---------- */}
      <nav className="bg-white/90 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        {/* Brand Section */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 transition-all">
            <span className="text-green-700">Task</span>Lite
          </h1>
          <p className="text-green-700 text-xs font-semibold tracking-widest uppercase">
            Sort • Simplify • Succeed
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 items-center">
          <Link href="/" className="no-underline">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-sm transition-all">
              Home
            </button>
          </Link>
          <Link href="/blog" className="no-underline">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-sm transition-all">
              Blog
            </button>
          </Link>
          <Link href="/help" className="no-underline">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-sm transition-all">
              Help Guide
            </button>
          </Link>

          {/* Connect with Alya Button */}
          <a
            href="https://www.linkedin.com/in/alya-k-561599364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-2 px-5 rounded-full shadow-sm transition-all">
              Connect with Alya 💚
            </button>
          </a>
        </div>
      </nav>

      {/* ---------- HERO SECTION ---------- */}
      <section className="mt-32 text-center px-6 max-w-3xl">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight text-gray-900">
          Welcome to{" "}
          <span className="text-green-700 font-extrabold">TaskLite</span>
        </h1>
        <p
          className="text-2xl text-gray-700 mb-10 leading-relaxed italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          “Plan your time, focus your energy, and create balance — because calm
          productivity is the best kind of success.”
        </p>
      </section>

      {/* ---------- BRAND STORY CARDS ---------- */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mb-16">
        {/* Card 1 - Inspiration */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-green-600 hover:-translate-y-2 transition-all">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🌱 Our Inspiration
          </h2>
          <p className="text-gray-700 leading-relaxed">
            TaskLite began with a belief that productivity doesn’t have to be
            stressful. Inspired by simplicity and calm, it helps you organize
            tasks while keeping your mind light and focused.
          </p>
        </div>

        {/* Card 2 - Philosophy */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-green-600 hover:-translate-y-2 transition-all">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🌿 Our Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We believe clarity is power. By sorting what matters and simplifying
            your day, TaskLite helps you focus your energy on what truly moves
            you forward.
          </p>
        </div>

        {/* Card 3 - Impact */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-green-600 hover:-translate-y-2 transition-all">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🌸 Our Impact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            From students to creators, TaskLite gives people a sense of control
            over their day. It’s not just about doing more — it’s about feeling
            lighter, prouder, and more at peace.
          </p>
        </div>

        {/* Card 4 - Testimonial */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-green-600 hover:-translate-y-2 transition-all md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            💬 What Our Users Say
          </h2>
          <p className="text-gray-700 italic leading-relaxed mb-4">
            “TaskLite changed how I plan my week. It’s like having a personal
            cheerleader that helps me stay calm, focused, and genuinely proud of
            my small wins every day.”
          </p>
          <p className="text-green-700 font-semibold text-lg">– Kajal</p>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <div className="text-center mb-16">
        <Link href="/tasks">
          <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-10 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            🌿 Let’s Plan Our Future →
          </button>
        </Link>
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="absolute bottom-6 text-gray-700 text-sm font-medium text-center">
        Presented with ☘️ by{" "}
        <span className="text-green-700 font-semibold tracking-wide">
          Alya K
        </span>
      </footer>

      {/* ---------- BACKGROUND BLOBS ---------- */}
      <div className="absolute w-[400px] h-[400px] bg-green-200 opacity-30 rounded-full blur-3xl top-[-100px] left-[-150px]" />
      <div className="absolute w-[300px] h-[300px] bg-lime-200 opacity-20 rounded-full blur-3xl bottom-[-80px] right-[-100px]" />

      {/* ---------- ANIMATION ---------- */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Playfair+Display:ital,wght@1,500;1,700&display=swap");

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section,
        h1,
        p {
          animation: fadeIn 1.2s ease-out;
        }

        body {
          font-family: "Nunito Sans", sans-serif;
        }
      `}</style>
    </div>
  )
}
