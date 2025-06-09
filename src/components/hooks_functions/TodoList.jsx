import React, { useEffect, useState } from "react";
import { addTaskAPI, getTasksAPI } from "./TodoAPI";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    // call backend api and get the list of tasks =
    const data = getTasksAPI();
    setTasks(data);

  }, [reload]);

  const addTask = () => {
    console.log("task name: ", inputValue);
    if (inputValue.trim() === "") {
      setError("Task name cannot be empty");
      return;
    }

    addTaskAPI(inputValue.trim());
    setReload(!reload);

    setError(""); // clear the error message
    setInputValue(""); // clear the input field
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">ToDo List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task name"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Add Task
            </button>
          </div>
          {error && <div className="text-danger mt-2">{error}</div>}

          <ul className="list-group mt-3">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item">
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;