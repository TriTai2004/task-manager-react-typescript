import { useEffect, useState } from "react";
import type { Task } from "../types/task";

const useTasks = () => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const stored = localStorage.getItem("tasks");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: Task) => setTasks((prevTasks) => ([...prevTasks, task]));
    
    const editTask = (updatedTask: Task) => setTasks((prevTasks) => prevTasks.map((task: Task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    ));
    const deleteTask = (id: string) => setTasks((prevTasks) => prevTasks.filter((task: Task) => task.id != id));



    return {
        tasks,
        addTask,
        editTask,
        deleteTask

    }
}

export default useTasks;