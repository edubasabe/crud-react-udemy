/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";
import "./App.css";
import "tailwindcss/dist/tailwind.min.css";
import FormTask from "./components/FormTask/FormTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const db = firebase.firestore();
        const { docs } = await db.collection("tareas").get();
        const tasksArray = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTasks(tasksArray);
      } catch (error) {
        console.error("getTasks -> error", error);
      }
    };

    getTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Escriba algo por favor...");
      return;
    }

    try {
      const db = firebase.firestore();
      const newTask = {
        name: task,
        fecha: Date.now(),
      };
      const { id } = await db.collection("tareas").add(newTask);
      setTasks([...tasks, { ...newTask, id }]);
      setTask("");
      focusTaskInput();
      setError(null);
    } catch (error) {
      console.log("addTask -> error", error);
    }
  };

  const handleDeleteTask = async (id, name) => {
    const confirmation = confirm(`¿Estás seguro que quieres borrar ${name}?`);
    if (confirmation) {
      try {
        const db = firebase.firestore();
        await db.collection("tareas").doc(id).delete();
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
      } catch (error) {
        console.log("handleDeleteTask -> error", error);
      }
    }
  };

  const handleEdit = (id, name) => {
    setEditMode(true);
    setTask(name);
    setId(id);
    focusTaskInput();
  };

  const editTask = async (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Escriba algo por favor...");
      return;
    }

    try {
      const db = firebase.firestore();
      await db.collection("tareas").doc(id).update({
        name: task,
      });

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
    } catch (error) {
      console.log("handleEditTask -> error", error);
    }
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
            <Tasks
              tasks={tasks}
              taskedit={(id, name) => handleEdit(id, name)}
              taskdelete={(id, name) => handleDeleteTask(id, name)}
            />
          </div>
          <div className="pl-2 md:w-1/4">
            <h2 className="text-2xl font-semibold">
              {editMode ? "Editar tarea" : "Agregar tarea"}
            </h2>
            <FormTask
              editMode={editMode}
              task={task}
              error={error}
              addtask={(e) => addTask(e)}
              edittask={(e) => editTask(e)}
              settask={(e) => setTask(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
