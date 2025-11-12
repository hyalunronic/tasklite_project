"use client"
import Link from "next/link"

export default function HelpGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d8f3dc] to-[#b7e4c7] flex flex-col items-center pt-28 px-6 text-gray-900 font-[Nunito_Sans] relative">
      {/* ---------- NAVBAR ---------- */}
      <nav className="bg-white/90 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-col leading-tight">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            <span className="text-green-700">Task</span>Lite
          </h1>
          <p className="text-green-700 text-xs font-semibold tracking-widest uppercase">
            Sort • Simplify • Succeed
          </p>
        </div>

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
          <Link href="/blog" className="no-underline">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-sm transition-all">
              Blog
            </button>
          </Link>

          {/* Connect Button */}
          <a
            href="https://www.linkedin.com/in/alya-k-561599364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-2 px-5 rounded-full shadow-sm transition-all">
              Connect with Alya 💚
            </button>
          </a>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <header className="text-center mt-20 mb-12 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-green-700">TaskLite Help Guide</span>
        </h1>
        <p className="text-gray-700 text-lg italic leading-relaxed">
          “Your calm companion for getting started, creating, and managing your
          goals — one step at a time.”
        </p>
      </header>

      {/* ---------- GETTING STARTED SECTION ---------- */}
      <section className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-3xl text-left mb-20">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          🌿 Getting Started
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Welcome to <strong>TaskLite</strong> — your peaceful productivity
          partner. This guide will help you take your first steps and learn how
          to plan, organize, and complete tasks easily.
        </p>

        <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
          <li>
            <strong>Start from the Home Page:</strong> Click{" "}
            <em>“Let’s Plan Our Future”</em> to enter your personal TaskLite
            dashboard.
          </li>
          <li>
            <strong>Add Your First Task:</strong> On your dashboard, click{" "}
            <em>“+ Add New Task”</em> to open the task creation form.
          </li>
          <li>
            <strong>Fill in Task Details:</strong> Add a task name, due date,
            and priority level. Choose a type (like “Exam” or “Assignment”) and
            color to organize your list visually.
          </li>
          <li>
            <strong>Save and View:</strong> Hit{" "}
            <span className="font-semibold">“Save Task”</span> to store it in
            your TaskLite list. It will appear instantly on your{" "}
            <Link
              href="/tasks"
              className="text-green-700 hover:underline font-semibold"
            >
              Today’s Tasks
            </Link>{" "}
            page.
          </li>
          <li>
            <strong>Manage with Ease:</strong> Check off completed tasks or
            delete them when finished. Each action updates your dashboard
            instantly.
          </li>
        </ol>

        <p className="text-gray-700 mt-6 italic">
          Tip: Use colors to visually separate categories — for example, green
          for study, blue for projects, red for urgent deadlines.
        </p>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-8 max-w-3xl text-center mb-20">
        <h3 className="text-2xl font-bold text-green-700 mb-3">
          Need More Help?
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Still have questions, feedback, or ideas to improve TaskLite? You can
          reach me anytime — I’d love to hear from you.
        </p>
        <a
          href="https://www.linkedin.com/in/alya-k-561599364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:shadow-xl transition-all inline-block"
        >
          🌸 Connect with Alya on LinkedIn
        </a>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="text-gray-700 text-sm font-medium text-center mb-8">
        TaskLite by{" "}
        <span className="text-green-700 font-semibold tracking-wide">
          Alya K
        </span>
      </footer>

      {/* ---------- BACKGROUND BLOBS ---------- */}
      <div className="absolute w-[400px] h-[400px] bg-green-200 opacity-30 rounded-full blur-3xl top-[-100px] left-[-150px]" />
      <div className="absolute w-[300px] h-[300px] bg-lime-200 opacity-20 rounded-full blur-3xl bottom-[-80px] right-[-100px]" />

      {/* ---------- GLOBAL FONT ---------- */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Playfair+Display:ital,wght@1,500;1,700&display=swap");

        body {
          font-family: "Nunito Sans", sans-serif;
        }
      `}</style>
    </div>
  )
}
