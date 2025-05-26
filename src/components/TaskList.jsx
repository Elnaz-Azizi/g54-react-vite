import React from "react";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Do laundry", completed: true },
    { id: 2, title: "Buy groceries", completed: false },
    { id: 3, title: "Write code", completed: true },
    { id: 4, title: "Read a book", completed: false },
    { id: 5, title: "Exercise", completed: true },
    { id: 6, title: "Water plants", completed: false },
    { id: 7, title: "Call a friend", completed: true },
    { id: 8, title: "Clean the house", completed: false },
    { id: 9, title: "Cook dinner", completed: true },
    { id: 10, title: "Plan weekend trip", completed: false },
    { id: 11, title: "Task 11", completed: false },
    { id: 12, title: "Task 12", completed: true },
  ];

  const getCompletedTasks = () => tasks.filter((task) => task.completed);
  const getIncompleteTasks = () => tasks.filter((task) => !task.completed);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Completed Tasks Section */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-success text-white text-center">
              <h4 className="mb-0">Completed Tasks</h4>
            </div>
            <ul className="list-group">
              {getCompletedTasks().map((task) => (
                <li
                  key={task.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  {task.title}
                  <span className="badge bg-success">Completed</span>
                </li>
              ))}
              {getCompletedTasks().length === 0 && (
                <li className="list-group-item text-center">
                  No completed tasks
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Incomplete Tasks Section */}
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-warning text-dark text-center">
              <h4 className="mb-0">Incomplete Tasks</h4>
            </div>
            <ul className="list-group">
              {getIncompleteTasks().map((task) => (
                <li
                  key={task.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {task.title}
                  <span className="badge bg-secondary">Pending</span>
                </li>
              ))}
              {getIncompleteTasks().length === 0 && (
                <li className="list-group-item text-center">
                  All tasks completed!
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
