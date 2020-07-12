import React from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task";
const Tasks = (props) => {
  return (
    <ul>
      {props.tasks.length === 0 ? (
        <li>No hay tareas</li>
      ) : (
        props.tasks.map(({ id, name }) => {
          return (
            <Task
              id={id}
              key={id}
              name={name}
              edit={props.taskedit}
              remove={props.taskdelete}
            />
          );
        })
      )}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  taskedit: PropTypes.func,
  taskdelete: PropTypes.func,
};

export default Tasks;
