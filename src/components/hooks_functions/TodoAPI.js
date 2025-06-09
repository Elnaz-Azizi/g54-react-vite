const tasks = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a To-Do App" },
];

export const getTasksAPI = () => {
  return tasks;
};

export const addTaskAPI = (newTaskText) => {
  const newTask = { id: newTaskText.length + 1, text: newTaskText };
  tasks.push(newTask);
  return newTask;
};