/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import Tasks from "../../components/Tasks/Tasks";
import FormTask from "../../components/FormTask/FormTask";
import { IoIosApps } from "react-icons/io";
import PageHeading from "../../components/PageHeading/PageHeading";

const MyTasks = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
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
    <div>
      <PageHeading>
        <IoIosApps size="2em" className="mr-2" />
        <h2 className="text-2xl font-semibold">Lista de tareas</h2>
      </PageHeading>
      <div className="max-w-5xl mx-auto flex flex-wrap">
        <div className="w-full">
          {/* <h2 className="text-sm">
            {editMode ? "Editar tarea" : "Agregar tarea"}
          </h2> */}
          <FormTask
            editMode={editMode}
            task={task}
            error={error}
            addtask={(e) => addTask(e)}
            edittask={(e) => editTask(e)}
            settask={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="md:w-full pr-2">
          <Tasks
            tasks={tasks}
            taskedit={(id, name) => handleEdit(id, name)}
            taskdelete={(id, name) => handleDeleteTask(id, name)}
          />
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
