import React, { useState } from "react";

const TaskManager = () => {
  const [user, setUser] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
    dueDate: "",
    status: "Pending",
  });
  const [filter, setFilter] = useState({
    name: "",
    status: "",
    dueDate: "",
  });

  const addUser = () => {
    if (user.trim() !== "") {
      setUser(user.trim());
    }
  };

  const createTask = () => {
    if (newTask.name.trim() !== "" && newTask.dueDate.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({ name: "", dueDate: "", status: "Pending" });
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const changeStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  const filterTasks = () => {
    return tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        task.status.toLowerCase().includes(filter.status.toLowerCase()) &&
        task.dueDate.toLowerCase().includes(filter.dueDate.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Task Manager</h2>

      {/* User */}
      <div>
        <label>Add User</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={addUser}>Add</button>
      </div>

      {/* Task Creation */}
      <div>
        <h3>Create Task</h3>
        <label>Task Name</label>
        <input
          type="text"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <label>Due Date:</label>
        <input
          type="text"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <button onClick={createTask}>Create</button>
      </div>

      {/* Task Filtering */}
      <div>
        <h3>Filter Tasks</h3>
        <label>Task Name</label>
        <input
          type="text"
          value={filter.name}
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
        />
        <label>Status:</label>
        <input
          type="text"
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        />
        <label>Due Date</label>
        <input
          type="text"
          value={filter.dueDate}
          onChange={(e) => setFilter({ ...filter, dueDate: e.target.value })}
        />
      </div>

      {/* Task List */}
      <div>
        <h3>Task List</h3>
        {filterTasks().map((task, index) => (
          <div key={index}>
            <p>Name: {task.name}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => changeStatus(index, "Pending")}>
              Pending
            </button>
            <button onClick={() => changeStatus(index, "Completed")}>
              Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
