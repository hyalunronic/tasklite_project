"use client"
import { useState } from "react"

export default function CreateTask() {
  const [task, setTask] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [priority, setPriority] = useState("Medium")
  const [taskType, setTaskType] = useState("Assignment")
  const [color, setColor] = useState("#000000")

  return (
    <div className=" min-h-screen flex flex-col  items-center justify-center bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Create your Task
      </h1>

      <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4">
        <div>
          <label className="block text-gray-900 font-semibold mb-1">
            Task Name
          </label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900"
            placeholder="Enter task name"
          />
          </div>
        <div>
          <label className="block text-gray-900 font-semibold mb-1">
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900"
          />
        </div>

        <div>
          <label className="block text-gray-900 font-semibold mb-1">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Task Type Dropdown */}
        <div>
          <label className="block text-gray-900 font-semibold mb-1">
            Type of Task
          </label>
          <select
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-900"
          >
            <option>Assignment</option>
            <option>Self Study</option>
            <option>Exam</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-900 font-semibold mb-1">
            Color
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-16 h-10 border border-gray-400 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Save Task
        </button>
      </form>
    </div>
  )
}
