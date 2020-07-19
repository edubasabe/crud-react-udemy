import React from "react";
import PropTypes from "prop-types";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Error from "../UI/Error/Error";
const FormTask = (props) => {
  return (
    <form
      onSubmit={props.editMode ? props.edittask : props.addtask}
      className="flex flex-start mb-4 px-4"
    >
      <Input
        type="text"
        placeholder="Ingresa una tarea"
        onChange={props.settask}
        value={props.task}
        className="mr-2"
      />

      {props.editMode ? (
        <Button type="submit" className="w-48 bg-orange-500 block">
          Editar
        </Button>
      ) : (
        <Button
          type="submit"
          className="w-48 bg-teal-500 rounded block text-white"
        >
          Agregar
        </Button>
      )}

      {props.error && <Error>{props.error}</Error>}
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
