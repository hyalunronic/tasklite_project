"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function TasksPage() {
  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState({})
  const [time, setTime] = useState(new Date())

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks")
      const data = await res.json()
      setTasks(data)
      const status = {}
      data.forEach((task) => (status[task._id] = false))
      setCompleted(status)
    } catch (error) {
      console.error("Error fetching tasks:", error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  // Greeting
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good Morning ☀️"
    if (hour < 18) return "Good Afternoon 🌿"
    return "Good Evening 🌙"
  }

  // Handle checkbox + celebration
  const handleCheck = (id) => {
    const updated = { ...completed, [id]: !completed[id] }
    setCompleted(updated)
    const allDone =
      Object.values(updated).length > 0 &&
      Object.values(updated).every((v) => v === true)

    if (allDone) {
      const banner = document.createElement("div")
      banner.textContent = "🎉 You completed everything today — well done!"
      banner.className =
        "fixed top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-50"
      document.body.appendChild(banner)
      setTimeout(() => banner.remove(), 2500)
    }
  }

  // Handle delete (immediate UI update + backend call)
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })
      setTasks((prev) => prev.filter((task) => task._id !== id)) // instant update
    } catch (error) {
      console.error("Error deleting task:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d8f3dc] to-[#b7e4c7] flex flex-col items-center pt-28 px-6 text-center relative text-gray-900 font-[Nunito_Sans]">
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

          {/* Connect with Alya */}
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

      {/* ---------- HEADER ---------- */}
      <header className="mb-12 mt-10">
        <p className="text-lg text-gray-700 font-medium mb-1">
          {getGreeting()}, <span className="font-semibold text-green-700"></span>
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
        <h1 className="text-5xl font-extrabold text-gray-900 font-[Nunito_Sans] mb-2">
          Today’s <span className="text-green-700">Tasks</span>
        </h1>
        <p
          className="text-gray-700 text-lg mt-2 italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          “Small steps today lead to calm victories tomorrow.”
        </p>
      </header>

      {/* ---------- TASK LIST ---------- */}
      <div className="w-full max-w-2xl">
        {tasks.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md py-10 px-6">
            <p className="text-gray-600 text-lg">
              No tasks yet — let’s create something meaningful today 🌸
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task._id}
                className={`bg-white rounded-xl p-5 flex justify-between items-center border-l-4 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg ${
                  completed[task._id]
                    ? "opacity-60 line-through border-gray-400"
                    : "border-green-500"
                }`}
              >
                {/* Task Info */}
                <div className="flex items-start text-left">
                  <div
                    className="w-3 h-3 rounded-full mt-2 mr-3"
                    style={{ backgroundColor: task.color }}
                  ></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 capitalize">
                      {task.task}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {task.taskType} • {task.priority} Priority
                    </p>
                    <p className="text-sm text-gray-500">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={completed[task._id] || false}
                    onChange={() => handleCheck(task._id)}
                    className="w-6 h-6 accent-green-600 cursor-pointer"
                  />
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow-sm transition-all"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ---------- ADD NEW TASK BUTTON ---------- */}
      <Link href="/create-task" className="mt-12">
        <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105">
          + Add New Task
        </button>
      </Link>

      {/* ---------- FOOTER ---------- */}
      <footer className="absolute bottom-6 text-gray-700 text-sm font-medium text-center">
        TaskLite by{" "}
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
