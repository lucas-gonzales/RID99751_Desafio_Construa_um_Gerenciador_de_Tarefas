import { Task } from '../types/Task';

interface TaskCardProps {
  task: Task;
  onComplete: (id: string) => void;
}

/**
 * Formata uma data para o padrão brasileiro DD/MM/YYYY
 */
function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Componente que representa um card de tarefa individual
 */
export function TaskCard({ task, onComplete }: TaskCardProps) {
  const handleCompleteClick = () => {
    onComplete(task.id);
  };

  return (
    <article className="task-card" aria-label={`Tarefa: ${task.name}`}>
      <div className="task-details">
        <h2 className={`task-name ${task.completed ? 'completed' : ''}`}>
          {task.name}
        </h2>
        <div className="task-meta">
          <span className="task-label">{task.label}</span>
          <time className="task-date" dateTime={task.createdAt.toISOString()}>
            Criado em: {formatDate(task.createdAt)}
          </time>
        </div>
      </div>
      {task.completed ? (
        <div className="checked-icon" aria-label="Tarefa concluída">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
      ) : (
        <button 
          className="complete-button" 
          onClick={handleCompleteClick}
          aria-label={`Concluir tarefa: ${task.name}`}
        >
          Concluir
        </button>
      )}
    </article>
  );
}
