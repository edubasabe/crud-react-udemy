import React, { useState } from "react";
import shortid from "shortid";
import "./App.css";
import "tailwindcss/dist/tailwind.min.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Escriba algo por favor...");
      return;
    }

    setTasks([...tasks, { id: shortid.generate(), name: task }]);
    setTask("");
    focusTaskInput();
    setError(null);
  };

  const handleDeleteTask = (id, name) => {
    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm(`¿Estás seguro que quieres borrar ${name}?`);
    if (confirmation) {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
    }
  };

  const handleEdit = (id, name) => {
    setEditMode(true);
    setTask(name);
    setId(id);
    focusTaskInput();
  };

  const handleEditTask = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Escriba algo por favor...");
      return;
    }

    const tasksEdited = tasks.map((taskItem) => {
      return taskItem.id === id
        ? {
            id,
            name: task,
          }
        : taskItem;
    });

    setTasks(tasksEdited);
    setEditMode(false);
    setTask("");
    setId("");
    setError(null);
  };

  const focusTaskInput = () => {
    document.querySelector("[name='task-name']").focus();
  };

  return (
    <div className="App">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold border-b my-5">CRUD React</h1>
        <div className="max-w-full flex">
          <div className="md:w-3/4 pr-2">
            <h2 className="text-2xl font-semibold">Lista de tareas</h2>
            <ul>
              {tasks.length === 0 ? (
                <li>No hay tareas</li>
              ) : (
                tasks.map(({ id, name }) => {
                  return (
                    <li
                      key={id}
                      className="border rounded flex py-5 px-8 mb-3 shadow hover:shadow-lg transition-shadow duration-200"
                    >
                      <p className="mr-auto">{name}</p>
                      <button
                        className="py-1 px-2 bg-yellow-300 rounded text-yellow-700 text-sm mr-2"
                        onClick={() => handleEdit(id, name)}
                      >
                        Editar
                      </button>
                      <button
                        className="py-1 px-2 bg-red-300 rounded text-red-700 text-sm"
                        onClick={() => handleDeleteTask(id, name)}
                      >
                        Eliminar
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <div className="pl-2 md:w-1/4">
            <h2 className="text-2xl font-semibold">
              {editMode ? "Editar tarea" : "Agregar tarea"}
            </h2>
            <form onSubmit={editMode ? handleEditTask : addTask}>
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal mb-2"
                type="text"
                placeholder="Ingresa una tarea"
                onChange={(e) => setTask(e.target.value)}
                value={task}
                name="task-name"
              />

              {error ? (
                <span className="text-red-500 text-sm mb-4">{error}</span>
              ) : null}

              {editMode ? (
                <button
                  type="submit"
                  className="py-2 px-2 bg-orange-500 rounded block w-full text-white"
                >
                  Editar tarea
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-2 px-2 bg-teal-500 rounded block w-full text-white"
                >
                  Agregar tarea
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
