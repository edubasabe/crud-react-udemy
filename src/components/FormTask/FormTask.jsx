import React from "react";
import PropTypes from "prop-types";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Error from "../UI/Error/Error";
const FormTask = (props) => {
  return (
    <form onSubmit={props.editMode ? props.edittask : props.addtask}>
      <Input
        type="text"
        placeholder="Ingresa una tarea"
        onChange={props.settask}
        value={props.task}
        name="task-name"
      />

      {props.error && <Error>{props.error}</Error>}

      {props.editMode ? (
        <Button type="submit" className="bg-orange-500 block w-full">
          Editar tarea
        </Button>
      ) : (
        <Button
          type="submit"
          className="bg-teal-500 rounded block w-full text-white"
        >
          Agregar tarea
        </Button>
      )}
    </form>
  );
};

FormTask.propTypes = {
  editMode: PropTypes.bool.isRequired,
  task: PropTypes.string.isRequired,
  error: PropTypes.any,
  addtask: PropTypes.func.isRequired,
  edittask: PropTypes.func.isRequired,
  settask: PropTypes.func.isRequired,
};

export default FormTask;
