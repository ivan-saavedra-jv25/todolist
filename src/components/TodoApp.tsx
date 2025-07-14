import React, { useState, useEffect } from 'react';

import { createTask, getTasks, saveTasks, type Task } from '../services/taskService';

import './TodoApp.css';



const TodoApp: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  
  

  useEffect(() => {
    const stored = getTasks();
    setTasks(stored);
    set_focus();
    
    const observer = new MutationObserver(() => {
      setIsDarkMode(localStorage.getItem('theme') === 'dark');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();

  }, []);

  

  
  const handleAddTask = async () => {
    if (newTask.trim() === '') return;
    const task = await createTask(newTask);
    const updated = [...tasks, task];
    setTasks(updated);
    saveTasks(updated); // 👈 guardar en localStorage
    setNewTask('');
    set_focus()
  };

  const handleToggleTask = (id: string) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    saveTasks(updated);
    set_focus();
  };

  const handleDeleteTask = (id: string) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    saveTasks(updated);
    set_focus()
  };

  const set_focus = () => {
    const input = document.getElementById('newTaskInput') as HTMLInputElement;
    if (input) {
        input.focus();
    }
  };

  
    

  return (
     <div className={`rounded shadow container p-3 my-4 ${isDarkMode ? 'bg-dark text-light' : 'bg-white'}`}>
      
      <h2>📝 Lista de Tareas</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { handleAddTask(); } }}
          className="form-control"
          placeholder="Nueva tarea"
          id="newTaskInput"
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Agregar
        </button>
      </div>
      
      <div className={`row text-center mb-3 ${isDarkMode ? 'text-light' : 'text-muted'}`}>
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          <p className="mb-0">
            Total de tareas: <strong>{tasks.length}</strong>
          </p>
        </div>
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          <p className="mb-0">
            Tareas completadas: <strong>{tasks.filter(t => t.completed).length}</strong>
          </p>
        </div>
        <div className="col-12 col-md-4">
          <p className="mb-0">
            Tareas por completar: <strong>{tasks.filter(t => !t.completed).length}</strong>
          </p>
        </div>
      </div>
      
      <table className={`table table-hover  align-middle table-group ${isDarkMode ? 'table-dark' : ''}`}>
        <thead>
          <tr>
            <th style={{ width: 60 }}>#</th>
            <th>Tarea</th>
            <th>Fecha</th>
            <th colSpan={2} className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.slice().reverse().map((task, idx) => (
            <tr key={task.id} className={task.completed ? 'table-secondary text-muted' : ''}>
              <td>
                <strong>{tasks.length - idx}</strong>
              </td>
              <td>
                <span className={task.completed ? 'text-decoration-line-through' : ''}>
                  {task.text}
                </span>
              </td>
              <td style={{ fontSize: '0.9rem', color: '#888' }}>
                {task.createdAt}
              </td>
              <td className="text-end">
                <button
                  className="btn btn-sm btn-success me-2"
                  onClick={() => handleToggleTask(task.id)}
                >
                  {task.completed ? 'Desmarcar' : 'Completar'}
                </button>
                
              </td>
              <td className="text-end">
                
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoApp;
