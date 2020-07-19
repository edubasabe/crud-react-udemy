import React from "react";
import Button from "../UI/Button/Button";

const Task = ({ id, name, edit, remove }) => {
  return (
    <>
      <li key={id} className="rounded flex items-center py-2 px-4">
        <input type="checkbox" className="form-checkbox mr-2" />
        <p className="mr-auto text-lg">{name}</p>
        <Button type="warning" className="mr-1" onClick={() => edit(id, name)}>
          Editar
        </Button>

        <Button type="danger" className="ml-1" onClick={() => remove(id, name)}>
          Eliminar
        </Button>
      </li>
    </>
  );
};

export default Task;
