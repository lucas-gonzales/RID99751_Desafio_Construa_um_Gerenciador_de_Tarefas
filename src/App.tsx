import './App.css';
import { useTasks } from './hooks/useTasks';
import { TaskForm } from './components/TaskForm';
import { TaskCard } from './components/TaskCard';

function App() {
  const { tasks, addTask, completeTask, completedCount } = useTasks();

  // Ordenar: tarefas pendentes primeiro, concluídas por último
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <main className="board-container">
      <header className="board-header">
        <h1 className="board-title">Board de tarefas</h1>
      </header>
      
      <section className="form-section">
        <TaskForm onAddTask={addTask} />
      </section>
      
      <section className="tasks-section" aria-label="Lista de tarefas">
        <div className="tasks-container">
          {tasks.length === 0 ? (
            <p className="empty-state">
              Nenhuma tarefa cadastrada. Adicione uma nova tarefa acima!
            </p>
          ) : (
            sortedTasks.map((task) => (
              <TaskCard key={task.id} task={task} onComplete={completeTask} />
            ))
          )}
        </div>
      </section>
      
      <hr className="divider" />
      
      <footer className="board-footer">
        <p className="footer-text">
          {completedCount} {completedCount === 1 ? 'tarefa concluída' : 'tarefas concluídas'}
        </p>
      </footer>
    </main>
  );
}

export default App;
