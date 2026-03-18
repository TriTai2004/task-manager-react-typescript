import { useState } from "react";
import type { Task } from "./types/task";
import Stats from "./components/stats";
import TaskForm from "./components/task-form";
import FilterBar from "./components/filter-bar";
import TaskList from "./components/task-list";
import useTasks from "./hooks/useTasks";

const App = () => {

  const [task, setTask] = useState<Task | null>();

  const { tasks, addTask, editTask, deleteTask } = useTasks();

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
          <Stats />
        </div>
        <div className="space-y-4 md:space-y-6">
          <TaskForm value={task} onSubmit={handleSubmit} onCancel={onCancel} />
          <FilterBar />
        </div>
        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />

      </div>
    </div>
  );
}

export default App