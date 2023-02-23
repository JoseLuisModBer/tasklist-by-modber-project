import './List.css';

import { useState } from 'react';

const List = ({ tasks, setTasks }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState();

  // Función que maneja el envío del formulario.
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Creamos la nueva tarea.
      const newTask = {
        id: tasks.length + 1,
        text,
        done: false,
      };

      // Actualizamos el array de tareas. Es importante crear un nuevo array para que React recargue el componente y podamos visualizar los cambios.
      setTasks([...tasks, newTask]);

      // Vaciamos el input.
      setText('');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Función que borra TODAS las tareas del localStorage:s
  const handleErraseAll = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      setTasks([]);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Función que borra las tareas realizadas del localStorage:s
  const handleErraseDone = (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const notDoneTasks = tasks.filter((task) => !task.done);
      setTasks(notDoneTasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Función que maneja el checkbox de la tarea.
  const handleTaskCheck = (currentTask) => {
    // Creamos un array donde almacenaremos todas las tareas dentro del array de tareas.
    const taskList = [...tasks];

    // Calculamos la posición de la tarea que queremos modificar.
    const position = currentTask.id - 1;

    // Modificamos la propiedad "done" tarea en cuestión (le damos la vuelta a la tortilla).
    taskList[position].done = !currentTask.done;

    // Modificamos el array de tareas agregando un nuevo array.
    setTasks(taskList);
  };

  return (
    <>
      <form className="new-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-input"
          value={text}
          maxLength="200"
          required
          autoFocus
          placeholder="Escribe tu nueva tarea..."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="form-button" disabled={loading}>
          Añadir
        </button>
      </form>

      {tasks.length > 0 && (
        <div className="h2-errasebuttons-container">
          <h2>LISTA DE TAREAS</h2>
          <div className="errase-buttons-container">
            <button
              className="erraseall-button"
              onClick={handleErraseAll}
              disabled={loading}
            >
              Borrar tareas
            </button>
            <button
              className="errasedone-button"
              onClick={handleErraseDone}
              disabled={loading}
            >
              Borrar realizadas
            </button>
          </div>
        </div>
      )}

      {tasks.length > 0 && (
        <ul className="ul-tasks-container">
          {tasks.map((task) => {
            return (
              <>
                <li
                  key={task.id}
                  className={task.done ? 'li-task-done' : 'li-task-pending'}
                >
                  <li className="li-checkbox-container">
                    <input
                      className="checkbox"
                      type="checkbox"
                      defaultChecked={task.done}
                      onChange={() => handleTaskCheck(task)}
                    />
                    <p className="p-checkbox-text">{task.text}</p>
                  </li>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;
