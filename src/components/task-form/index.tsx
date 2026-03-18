import { useEffect, useState } from "react";
import type { Task } from "../../types/task";
import { v4 as uuidv4 } from "uuid";
import { formatDateTimeLocal } from "../../utils/formatDate"; 

interface Props {
    value?: Task | null;
    onCancel: () => void;
    onSubmit: (value: Task) => void
}

const TaskForm = ({ value, onSubmit, onCancel }: Props) => {

    const [id, setId] = useState(value?.id || uuidv4());
    const [title, setTitle] = useState(value?.title || "");
    const [description, setDescription] = useState(value?.description || "");
    const [status, setStatus] = useState(value?.status || "TODO");
    const [deadline, setDeadline] = useState(
        value?.createdAt
            ? formatDateTimeLocal(new Date(value.createdAt))
            : formatDateTimeLocal(new Date())
    );
    const [createdAt, setCreatedAt] = useState(
        value?.createdAt
            ? formatDateTimeLocal(new Date(value.createdAt))
            : formatDateTimeLocal(new Date()));
    const [show, setShow] = useState(false);

    const handleSubmit = () => {

        if (!title || !description || !createdAt) {
            return;
        }

        const task: Task = {
            id: id,
            title: title,
            description: description,
            status: status,
            deadline: deadline,
            createdAt: createdAt,

        }

        onSubmit(task);
        clearForm();
        setShow(false);
    }

    const clearForm = () => {
        setId(uuidv4());
        setTitle("");
        setStatus("TODO");
        setDescription("");
        setDeadline(formatDateTimeLocal(new Date()));
        setCreatedAt(formatDateTimeLocal(new Date()));
    }

    useEffect(() => {

        const updateWithValue = () => {
            if (!value?.deadline || !value?.description) {
                return;
            }
            setId(value?.id);
            setTitle(value?.title);
            setStatus(value?.status);
            setDescription(value?.description);
            setDeadline(value?.deadline);
            setCreatedAt(value?.createdAt);
            setShow(true);
        }

        updateWithValue();

    }, [value])

    return (
        <>
            {show && (
                <div className="border md:p-4 rounded p-3 shadow-md">
                    <div className="grid md:grid-cols-3">
                        <div className="mb-4 md:p-1">
                            <label htmlFor="title" className="block">Title</label>
                            <input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                autoFocus
                                placeholder="Task name..."
                                className="border w-full rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />

                        </div>
                        <div className="mb-4 md:p-1">
                            <label htmlFor="status" className="block">Status</label>
                            <select
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value as "TODO" | "IN_PROGRESS" | "DONE")}
                                className="border w-full focus:ring-1 focus:ring-blue-400 outline-none rounded-lg p-2">
                                <option value="TODO">TODO</option>
                                <option value="IN_PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>
                        <div className="mb-4 md:p-1">
                            <label htmlFor="deadline" className="block">Deadline</label>
                            <input
                                id="deadline"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                type="datetime-local"
                                className="border w-full rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div className="mb-4 md:p-1">
                        <label htmlFor="description" className="block">Description</label>
                        <textarea
                            placeholder="Description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description" className="w-full border rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400">
                        </textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                setShow(!show);
                                clearForm();
                                onCancel();
                            }}
                            className="p-2 rounded text-white bg-gray-500 focus:outline-none me-2 transition">
                            Cancel
                        </button>
                        <button
                            onClick={() => handleSubmit()}
                            className="p-2 rounded text-white bg-gradient-to-r from-cyan-500
                             to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 transition">
                            { !value ? "Add Task" : "Update Task" }
                        </button>
                   
                    </div>
                </div>
            )}

            {!show && (
                <button
                    onClick={() => setShow(true)}

                    className="p-2 w-full rounded text-white bg-gradient-to-r from-cyan-500
                     to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 transition">
                    Add Task
                </button>
            )}
        </>
    )
}

export default TaskForm;
