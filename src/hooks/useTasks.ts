import { useEffect, useMemo, useState } from "react";
import type { Task, TaskStatus } from "../types/task";

export type StatusFilter = TaskStatus | "ALL";

const useTasks = () => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const stored = localStorage.getItem("tasks");
        return stored ? JSON.parse(stored) : [];
    });

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: Task) => setTasks((prevTasks) => ([...prevTasks, task]));

    const editTask = (updatedTask: Task) => setTasks((prevTasks) => prevTasks.map((task: Task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    ));

    const deleteTask = (id: string) => setTasks((prevTasks) => prevTasks.filter((task: Task) => task.id != id));

    const stats = useMemo(() => {
        const now = new Date();

        const total = tasks.length;

        const done = tasks.filter(t => t.status === "DONE").length;

        const overdue = tasks.filter(t => {
            if (!t.deadline) return false;

            const deadline = new Date(t.deadline);
            return deadline < now && t.status !== "DONE";
        }).length;

        return {
            total,
            done,
            overdue
        };
    }, [tasks]);

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {

            const matchTitle = task.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchStatus =
                statusFilter === "ALL" || task.status === statusFilter;

            return matchTitle && matchStatus;
        });
    }, [tasks, search, statusFilter]);



    return {
        tasks,
        addTask,
        editTask,
        deleteTask,
        stats,
        filteredTasks,
        search,
        setSearch,
        statusFilter,
        setStatusFilter

    }
}

export default useTasks;