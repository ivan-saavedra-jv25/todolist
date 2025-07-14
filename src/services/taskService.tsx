import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

// Guarda una tarea nueva
export const createTask = async (text: string): Promise<Task> => {
  const now = new Date();
  return {
    id: uuidv4(),
    text,
    completed: false,
    createdAt: now.toLocaleString(),
  };
};

// Simula obtener las tareas desde localStorage o backend
export const getTasks = (): Task[] => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
};

// Guarda todas las tareas
export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
