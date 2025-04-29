import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/taskSlice";
const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      editTask({
        id: task.id,
        title,
        description,
        status,
      })
    );
    setIsEdit(false);
  };
  return (
    <div>
      {isEdit ? (
        <div className="absolute bg-white p-4 rounded-md shadow-lg z-10">
          {" "}
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            Edit Task
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              type="text"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              row="3"
            ></textarea>
          </div>
          <div className="mb-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Done</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              className=" bg-indigo-600 text-white py-2 px-2 rounded-md hover:bg-indigo-700"
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              className="bg-gray-300 rounded-md py-2 px-2"
              onClick={() => setIsEdit(false)}
            >
              {" "}
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditTask;
