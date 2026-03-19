import { useState } from "react";
import type { Task } from "./types/task";
import Stats from "./components/stats";
import TaskForm from "./components/task-form";
import FilterBar from "./components/filter-bar";
import TaskList from "./components/task-list";
import useTasks from "./hooks/useTasks";

const App = () => {

  const [task, setTask] = useState<Task | null>();

  const { tasks, addTask, editTask, deleteTask, stats, search, statusFilter,
    filteredTasks, setSearch, setStatusFilter } = useTasks();

  const handleSubmit = (t: Task) => {
    if (task) {
      editTask(t);
      setTask(null);
    } else {
      addTask(t);
      setTask(null);
    }

  }

  const handleDelete = (id: string) => {
    deleteTask(id);

  }

  const handleEdit = (task: Task) => {
    setTask(task);
  }

  const onCancel = () => {
    setTask(null);
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Task Manager
        </h1>
        <div className="rounded md:border sm:p-3">
          <Stats done={stats.done} total={stats.total} overdue={stats.overdue} />
        </div>
        <div className="space-y-4 md:space-y-6">
          <TaskForm key={task?.id || "new"} value={task} onSubmit={handleSubmit} onCancel={onCancel} />
          <FilterBar search={search} statusFilter={statusFilter} onStatusChange={setStatusFilter} onSearchChange={setSearch} />
        </div>
        <TaskList tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} />
        {tasks.length === 0 && (
          <p className="text-center">No tasks yet</p>
        )}

        {tasks.length > 0 && filteredTasks.length === 0 && (
          <p className="text-center">No tasks found</p>
        )}
      </div>
    </div>
  );
}

export default App