import { useState } from "react";

export default function TodoList() {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || []; //initials
  const [tasks, setTasks] = useState(initialTasks);

  //remove items from tasks
  const handleRemove = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated)); // Update localStorage
  };

  //handle Check Box
  const handleToggle = (id) => {
    const updated = tasks.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  // add item in tasks
  function addItems(item) {
    const updatedTasks = [...tasks, item];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Update localStorage
  }

  return (
    <>
      <Form addItems={addItems} />
      <TaskList
        tasks={tasks}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
      />
      <Calculation tasks={tasks} />
    </>
  );
}

function Form({ addItems }) {
  const [item_, setItem_] = useState("");
  const [qty, setQty] = useState("");
  const [isDone, setIsdone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item_ || !qty) return;

    const newTask = {
      id: Math.trunc(Math.random() * 100000),
      itemName: item_,
      qty,
      isDone: setIsdone(isDone),
    };

    addItems(newTask);
    setItem_("");
    setQty("");
  };

  return (
    <>
      <section className="container-fluid mt-3">
        <div className="row">
          <div className="col-6 m-auto">
            <div className="card ">
              <div className="card-header text-center bg-info text-warning">
                <h1>Todo App</h1>
              </div>
              <div className="card-body bg-warning-subtle">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={item_}
                    onChange={(e) => setItem_(e.target.value)}
                    className="form-control mb-2"
                    placeholder="Add Title"
                  />
                  <input
                    type="text"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="form-control mb-2"
                    placeholder="Add Note"
                  />
                  <input
                    type="submit"
                    value="Add Note"
                    className="btn btn-md bg-info"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TaskList({ tasks, handleRemove, handleToggle }) {
  return (
    <>
      <section className="container-fluid mt-2">
        <div className="row">
          <div className="col-6 m-auto">
            <div className="card ">
              <ul className="list-group">
                {tasks.map((item) => (
                  <Task
                    key={item.id}
                    item={item}
                    handleRemove={handleRemove}
                    handleToggle={handleToggle}
                    tasks={tasks}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Task({ item, handleRemove, handleToggle }) {
  const { id, itemName, qty } = item;

  return (
    <>
      <li className="bg-primary-subtle list-group-item d-flex justify-content-between align-items-center">
        <span
          className="fw-bold"
          style={item.isDone ? { textDecoration: "line-through" } : {}}
        >
          <input
            type="checkbox"
            className="me-2"
            value={item.isDone}
            onChange={() => handleToggle(id)}
          />
          <span>{itemName}</span>
          ➡️
          <span>{qty}</span>
        </span>
        <button
          className="btn btn-sm btn-dark"
          onClick={() => handleRemove(id)}
        >
          ❌
        </button>
      </li>
    </>
  );
}

function Calculation({ tasks }) {
  let total = tasks.length;
  let completed = tasks.filter((task) => task.isDone === true).length;
  let percentage = Math.trunc((completed / total) * 100);
  return (
    <>
      <section className="container-fluid">
        <div className="row mt-3">
          <div className="col-6 m-auto">
            <div className="card text-center bg-success-subtle ">
              <div className="card-body">
                {total === 0 ? (
                  <h2 className="text-danger">No Items in the List</h2>
                ) : (
                  <div className="text-success">
                    <h2>Total Items in the List : {tasks.length}</h2>
                    <h3>Completed Tasks :{percentage}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
