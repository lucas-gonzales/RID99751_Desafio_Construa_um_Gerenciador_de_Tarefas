import { useState, useEffect } from 'react';
import { Task } from '../types/Task';

/** Chave utilizada para persistência no localStorage */
const STORAGE_KEY = 'task-board-tasks';

/**
 * Hook personalizado para gerenciamento de tarefas
 * Responsável por: adicionar, concluir, deletar tarefas e persistir no localStorage
 */
export function useTasks() {
  /**
   * Estado das tarefas - inicializado com dados do localStorage se existirem
   */
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        // Converte strings de data de volta para objetos Date
        return parsedTasks.map((task: Task) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        }));
      } catch {
        return [];
      }
    }
    return [];
  });

  /**
   * Persiste as tarefas no localStorage sempre que houver alteração
   */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Adiciona uma nova tarefa à lista
   * @param name - Nome da tarefa
   * @param label - Etiqueta/categoria da tarefa
   */
  const addTask = (name: string, label: string): void => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      label,
      createdAt: new Date(),
      completed: false,
    };
    setTasks((previousTasks) => [newTask, ...previousTasks]);
  };

  /**
   * Marca uma tarefa como concluída
   * @param taskId - ID da tarefa a ser concluída
   */
  const completeTask = (taskId: string): void => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  /**
   * Remove uma tarefa da lista
   * @param taskId - ID da tarefa a ser removida
   */
  const deleteTask = (taskId: string): void => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== taskId));
  };

  /** Contador de tarefas concluídas */
  const completedCount = tasks.filter((task) => task.completed).length;

  return {
    tasks,
    addTask,
    completeTask,
    deleteTask,
    completedCount,
  };
}
