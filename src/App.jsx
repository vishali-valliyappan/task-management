import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          Task Management App
        </h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
