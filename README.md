# 📝 Todo List App - React + TypeScript + Vite

Una aplicación de lista de tareas (Todo List) construida con **React**, **TypeScript** y **Vite**. Permite agregar, completar y eliminar tareas, con soporte para modo claro/oscuro y almacenamiento local.

## Características

- **Agregar tareas** rápidamente desde el input o presionando Enter.
- **Visualización en tabla** con número de tarea, descripción, fecha y acciones.
- **Completar/Desmarcar tareas** con un solo clic.
- **Eliminar tareas** fácilmente.
- **Contadores** de tareas totales, completadas y pendientes.
- **Modo oscuro/claro** con cambio suave y persistencia en localStorage.
- **Persistencia local**: tus tareas se guardan en el navegador.

## Vista previa

![Todo List Demo](./screenshot.png) <!-- Puedes agregar una captura de pantalla aquí -->

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/react-auth-app.git
   cd react-auth-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Uso

- Escribe una tarea en el campo de texto y haz clic en **Agregar** o presiona **Enter**.
- Marca una tarea como completada con el botón **Completar** o vuelve a marcarla como pendiente con **Desmarcar**.
- Elimina una tarea con el botón **Eliminar**.
- Cambia entre modo claro y oscuro usando el botón en la barra de navegación.

## Estructura del código

El componente principal de la lista de tareas se ve así:

```tsx
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
  <div className="row text-center mb-3">
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
  <table className={`table table-hover align-middle table-group ${isDarkMode ? 'table-dark' : ''}`}>
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
```

## Personalización

- Puedes modificar los estilos en `TodoApp.css` o agregar nuevas funcionalidades según tus necesidades.
- El modo oscuro/claro se puede personalizar editando las clases CSS.

## Licencia

MIT

---
Desarrollado con ❤️ usando React, TypeScript y Vite.