"use client"
import Link from "next/link"

export default function BlogPage() {
  // Example posts (replace later with real content or backend data)
  const posts = [
    {
      title: "🌿 The Calm Behind Productivity",
      excerpt:
        "True productivity isn’t about doing more — it’s about doing peacefully. Here’s how TaskLite helps you achieve focus without the burnout spiral.",
      link: "#",
    },
    {
      title: "⏰ Planning Without Pressure",
      excerpt:
        "Your goals deserve clarity, not chaos. Learn how mindful planning creates consistency, confidence, and calm progress.",
      link: "#",
    },
    {
      title: "💭 Minimalism for the Mind",
      excerpt:
        "Declutter your digital space and mental load. Discover small habits that make your workday lighter and your mind quieter.",
      link: "#",
    },
    {
      title: "🌸 The Beauty of Slow Growth",
      excerpt:
        "Growth isn’t a race — it’s rhythm. TaskLite teaches that steady progress is the most sustainable kind of success.",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d8f3dc] to-[#b7e4c7] flex flex-col items-center pt-28 px-6 text-center relative text-gray-900 font-[Nunito_Sans]">
      {/* ---------- NAVBAR ---------- */}
      <nav className="bg-white/90 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        {/* Brand */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            <span className="text-green-700">Task</span>Lite
          </h1>
          <p className="text-green-700 text-xs font-semibold tracking-widest uppercase">
            Sort • Simplify • Succeed
          </p>
        </div>

        {/* Navbar Buttons */}
        <div className="flex space-x-4 items-center">
          <Link href="/" className="no-underline">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-sm transition-all">
              Home
            </button>
          </Link>
          <Link href="/tasks" className="no-underline">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-sm transition-all">
              Tasks
            </button>
          </Link>
          <Link href="/help" className="no-underline">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-sm transition-all">
              Help Guide
            </button>
          </Link>

          {/* Connect with Alya */}
          <a
            href="https://www.linkedin.com/in/alya-k-561599364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all py-2 px-5 rounded-full font-semibold shadow-sm">
              Connect with Alya 💚
            </button>
          </a>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <header className="mt-24 max-w-3xl text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">
          The <span className="text-green-700">TaskLite</span> Journal
        </h1>
        <p className="text-lg text-gray-700 italic leading-relaxed">
          “Where clarity meets calm — stories, insights, and reflections to help
          you find balance in the chaos of everyday life.”
        </p>
      </header>

      {/* ---------- CATEGORY FILTERS ---------- */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {["All", "Mindful Planning", "Productivity", "Life Balance", "Stories"].map(
          (cat, index) => (
            <button
              key={index}
              className="bg-white border border-green-300 text-gray-700 hover:bg-green-100 px-4 py-2 rounded-full font-medium text-sm transition-all"
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* ---------- FEATURED POST ---------- */}
      <section className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 border-l-4 border-green-600 max-w-4xl mb-14 text-left">
        <h2 className="text-3xl font-bold text-green-700 mb-3">
          ✨ Featured: Designing a Peaceful Life
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          How slowing down and focusing on meaningful goals can reshape your
          happiness and productivity. Discover how TaskLite’s calm philosophy
          empowers your focus every day.
        </p>
        <Link href="#" className="text-green-700 font-semibold hover:underline">
          Read Full Article →
        </Link>
      </section>

      {/* ---------- BLOG POSTS GRID ---------- */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mb-20">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-green-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between text-left"
          >
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <Link
              href={post.link}
              className="text-green-700 font-semibold hover:underline text-sm text-right"
            >
              Read More →
            </Link>
          </div>
        ))}
      </section>

      {/* ---------- PERSONAL MESSAGE ---------- */}
      <section className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-8 max-w-3xl text-center mb-20">
        <h3 className="text-2xl font-bold text-green-700 mb-3">
          From the Desk of Alya K ☘️
        </h3>
        <p className="text-gray-700 italic leading-relaxed">
          “TaskLite isn’t about chasing perfection. It’s about finding peace in
          progress — learning that a calm mind plans better, works better, and
          lives better.”
        </p>
      </section>

      {/* ---------- CTA ---------- */}
      <div className="text-center mb-16">
        <p className="text-lg text-gray-700 mb-4 font-medium">
          Found something inspiring?
        </p>
        <Link href="/tasks">
          <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            🌿 Let’s Put It Into Action →
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

      {/* ---------- ANIMATION & FONT ---------- */}
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

        header,
        section,
        h1,
        p {
          animation: fadeIn 1s ease-out;
        }

        body {
          font-family: "Nunito Sans", sans-serif;
        }
      `}</style>
    </div>
  )
}
