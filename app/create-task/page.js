"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function CreateTask() {
  const [task, setTask] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [priority, setPriority] = useState("Medium")
  const [taskType, setTaskType] = useState("Assignment")
  const [color, setColor] = useState("#00a86b")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newTask = { task, dueDate, priority, taskType, color }

    try {
      const res = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      })

      if (res.ok) {
        router.push("/tasks")
      } else {
        alert("⚠️ Failed to save task. Please make sure backend is running.")
      }
    } catch (err) {
      console.error(err)
      alert("🚫 Error connecting to server.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d8f3dc] to-[#b7e4c7] flex flex-col items-center pt-28 px-4 font-[Nunito_Sans] text-gray-900 relative">
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
          <Link href="/tasks">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition-all">
              Back to Tasks
            </button>
          </Link>
        </div>
      </nav>

      {/* ---------- FORM CONTAINER ---------- */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md mt-10">
        <h1 className="text-4xl font-extrabold mb-3 text-center text-green-700">
          ✏️ Create a Task
        </h1>
        <p className="text-gray-600 text-center mb-8 italic">
          “Organize your peace, one task at a time.”
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Task Name */}
          <div>
            <label className="block text-gray-900 font-semibold mb-1">
              Task Name
            </label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task..."
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-gray-900 font-semibold mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-gray-900 font-semibold mb-1">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Type of Task */}
          <div>
            <label className="block text-gray-900 font-semibold mb-1">
              Type of Task
            </label>
            <select
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            >
              <option>Assignment</option>
              <option>Self Study</option>
              <option>Exam</option>
              <option>Project</option>
            </select>
          </div>

          {/* Color Picker */}
          <div>
            <label className="block text-gray-900 font-semibold mb-1">
              Color
            </label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-16 h-10 border border-gray-300 rounded cursor-pointer transition-all"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all text-lg"
          >
            Save Task
          </button>
        </form>
      </div>

      {/* ---------- QUOTE / FOOTER ---------- */}
      <footer className="mt-10 text-gray-700 text-sm font-medium text-center">
        TaskLite by{" "}
        <span className="text-green-700 font-semibold tracking-wide">
          Alya K
        </span>
      </footer>

      {/* ---------- BACKGROUND BLOBS ---------- */}
      <div className="absolute w-[350px] h-[350px] bg-green-200 opacity-30 rounded-full blur-3xl top-[150px] left-[-120px]" />
      <div className="absolute w-[250px] h-[250px] bg-lime-200 opacity-20 rounded-full blur-3xl bottom-[60px] right-[-100px]" />

      {/* ---------- GLOBAL FONT ---------- */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Playfair+Display:ital,wght@1,500;1,700&display=swap");

        body {
          font-family: "Nunito Sans", sans-serif;
          background: #d8f3dc;
        }
      `}</style>
    </div>
  )
}
