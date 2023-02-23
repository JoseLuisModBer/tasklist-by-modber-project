import './App.css';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import List from './components/List/List';
import { Instructions } from './components/Instructions/Instructions';
import { Footer } from './components/Footer/Footer';

function App() {
  //Almaceno en localStorage el contenido de tasks:
  const storedTasksInLocalStorage =
    JSON.parse(localStorage.getItem('tasks')) || [];

  // useState cuyo vaor inicial será lo que haya almacenado en el localStorage
  const [tasks, setTasks] = useState(storedTasksInLocalStorage);

  // useEffect que recoge automáticamente el contenido del localStorage y lo almacena en tasks. Se actualizará cada vez que haya cambios en el array de dependencias [tasks]
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={<List tasks={tasks} setTasks={setTasks} />}
          />
          <Route path="instructions" element={<Instructions />} />
          <Route
            path="*"
            element={<List tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
