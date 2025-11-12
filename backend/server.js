// 1️⃣ Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 2️⃣ Create the express app
const app = express();

// 3️⃣ Middlewares
app.use(cors());
app.use(express.json());

// 4️⃣ Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/tasklite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

// 5️⃣ Define Schema + Model
const taskSchema = new mongoose.Schema({
  task: String,
  dueDate: String,
  priority: String,
  taskType: String,
  color: String
});
const Task = mongoose.model("Task", taskSchema);

// 6️⃣ Routes
app.get("/", (req, res) => {
  res.send("Backend is alive!");
});

app.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json({ message: "Task saved successfully!", task: newTask });
  } catch (error) {
    res.status(500).json({ message: "Error saving task", error });
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
});

// 7️⃣ Start server
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});