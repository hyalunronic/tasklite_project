export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-green-100 pt-8">
      {/* Title at the top center */}
      <h1 className="text-6xl font-extrabold text-black mb-6">
        TaskLite
      </h1>

      {/* Quote */}
      <p className="text-lg italic text-gray-800 mb-10 text-center px-4">
        "Time is what we want most, but what we use worst." – William Penn
      </p>

      

      {/* Add Task Button */}
      <a
        href="/create-task"
        className="mt-12 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700"
      >
        + Add Task
      </a>
    </div>
  );
}
