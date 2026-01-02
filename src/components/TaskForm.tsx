import { useState, FormEvent, ChangeEvent } from 'react';

interface TaskFormProps {
  onAddTask: (name: string, label: string) => void;
}

/**
 * Componente de formulário para adicionar novas tarefas
 */
export function TaskForm({ onAddTask }: TaskFormProps) {
  const [taskName, setTaskName] = useState('');
  const [taskLabel, setTaskLabel] = useState('');

  /**
   * Manipula o envio do formulário
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const trimmedName = taskName.trim();
    const trimmedLabel = taskLabel.trim();
    
    if (trimmedName && trimmedLabel) {
      onAddTask(trimmedName, trimmedLabel);
      clearForm();
    }
  };

  /**
   * Limpa os campos do formulário
   */
  const clearForm = () => {
    setTaskName('');
    setTaskLabel('');
  };

  /**
   * Manipula mudança no campo nome
   */
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  /**
   * Manipula mudança no campo etiqueta
   */
  const handleLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(event.target.value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} aria-label="Adicionar nova tarefa">
      <label htmlFor="task-name" className="visually-hidden">Nome da tarefa</label>
      <input
        id="task-name"
        type="text"
        className="input-field"
        placeholder="Nome da tarefa"
        value={taskName}
        onChange={handleNameChange}
        required
        aria-required="true"
      />
      
      <label htmlFor="task-label" className="visually-hidden">Etiqueta</label>
      <input
        id="task-label"
        type="text"
        className="input-field"
        placeholder="Etiqueta"
        value={taskLabel}
        onChange={handleLabelChange}
        required
        aria-required="true"
      />
      
      <button type="submit" className="add-button" aria-label="Adicionar tarefa">
        +
      </button>
    </form>
  );
}
