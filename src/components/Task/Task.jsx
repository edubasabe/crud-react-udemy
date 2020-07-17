import React from "react";
import Button from "../UI/Button/Button";

const Task = ({ id, name, edit, remove }) => {
  return (
    <>
      <li key={id} className="border rounded flex py-5 px-8 mb-3 duration-200">
        <p className="mr-auto text-xl font-semibold">{name}</p>
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
