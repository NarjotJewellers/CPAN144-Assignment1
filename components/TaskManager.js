"use client";

import { useState } from "react";

export default function TaskManager() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>

      <input
  placeholder="Enter a task..."
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>

      <button onClick={addTask}>
        Add New Task
      </button>

      {tasks.length === 0 ? (
        <p>No Tasks Yet</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}