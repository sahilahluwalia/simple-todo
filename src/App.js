import "./App.css";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    // { id: 1, title: "apple", status: true },
    // { id: 2, title: "mac", status: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = items.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setItems([...items, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    const newTasks = items.filter((task) => task.id !== id);
    setItems(newTasks);
  };

  const markDone = (id) => {
    const newTask = items.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setItems(newTask);
  };

  return (
    <>
      <h2>Simple Todo in React</h2>
      <div className="container">
        Enter Item
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter the Task"
        />
        <button onClick={addTask}>Submit</button>
      </div>

      <h3>List of all Tasks</h3>
      <div className="mid"> {items && items.length ? " " : "No tasks.."}</div>
      {items &&
        items.map((task, index) => {
          return (
            <>
              <div key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="task-text">{index + 1} </span>
                    <span className="task-text">{task.title}</span>
                    <div className="btn">
                      <button onClick={() => deleteTask(task.id)}>
                        Delete
                      </button>
                      <button onClick={() => markDone(task.id)}>
                        Complete ✔
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      <h3>List of Completed tasks</h3>
      {items &&
        items.map((task, index) => {
          if (task.status) {
            return (
              <>
                <div key={task.id}>
                  <div className="col taskBg complete">
                    <div>
                      <span className="task-text">{index + 1}</span>
                      <span className="task-text">{task.title}</span>
                      <div className="btn">
                        <button onClick={() => deleteTask(task.id)}>
                          Delete
                        </button>
                        <button onClick={() => markDone(task.id)}>
                          Pending ✖
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      <h3>List of Pending tasks</h3>
      {items &&
        items.map((task, index) => {
          if (!task.status) {
            return (
              <>
                <div key={task.id}>
                  <div className="col taskBg incomplete">
                    <div>
                      <span className="task-text">{index + 1}</span>
                      <span className="task-text">{task.title}</span>
                      <div className="btn">
                        <button onClick={() => deleteTask(task.id)}>
                          Delete
                        </button>
                        <button onClick={() => markDone(task.id)}>
                          Complete ✔
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
    </>
  );
}

export default App;
