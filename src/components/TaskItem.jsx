import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./TaskItem.module.css";

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function TaskItem({ task, onToggleCompleted, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  useEffect(() => {
    setIsCompleted(task.completed);
  }, [task]);

  const handleToggleCompleted = () => {
    setIsCompleted(!isCompleted);
    onToggleCompleted(task.id);
  };

  const handleDelete = () => {
    // Mostrar una ventana de confirmación al usuario antes de eliminar la tarea
    const confirmed = window.confirm('¿Estás seguro de que queres eliminar esta tarea?');
    
    // Verificar si el usuario confirmó la eliminación
    if (confirmed) {
      onDelete(task.id);
    }
    // Si el usuario cancela, no se ejecuta la eliminación
  };

  return (
    <div className={styles.containerItem}>
      <input
        className={styles.completed}
        type="checkbox"
        checked={isCompleted}
        onChange={handleToggleCompleted}
      />
      <span
        className={styles.text}
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          textShadow: isCompleted ? "0 0 3px rgba(0, 255, 0, 0.5)" : "none",
        }}
      >
        {task.name}
      </span>
      <button className={styles.deleteButton} onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default TaskItem;
