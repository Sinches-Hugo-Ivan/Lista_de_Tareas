import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskForm.module.css'

let nextTaskId = 0;

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    const trimmedTask = newTask.trim();
    if (trimmedTask !== '') {
      const task = {
        id: nextTaskId++,
        name: trimmedTask,
        completed: false,
      };
      addTask(task);
      setNewTask('');
    } else {
      alert('Tenes que escribir una tarea san cayetano');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleAddTask}>
      <input className={styles.input}
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Que hacemos hoy?"
      />
      <button className={styles.addButton} type="submit">AGREGAR</button>
    </form>
  );
}

export default TaskForm;