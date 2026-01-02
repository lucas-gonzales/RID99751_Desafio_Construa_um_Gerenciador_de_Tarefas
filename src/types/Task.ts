/**
 * Interface que representa uma tarefa no board
 */
export interface Task {
  /** Identificador único da tarefa */
  id: string;
  /** Nome/título da tarefa */
  name: string;
  /** Etiqueta/categoria da tarefa (ex: frontend, backend, ux) */
  label: string;
  /** Data de criação da tarefa */
  createdAt: Date;
  /** Indica se a tarefa foi concluída */
  completed: boolean;
}
