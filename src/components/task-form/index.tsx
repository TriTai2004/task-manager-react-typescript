import { useState } from "react";
import type { Task, TaskStatus } from "../../types/task";
import { v4 as uuidv4 } from "uuid";
import { formatDateTimeLocal } from "../../utils/formatDate";

interface Props {
    value?: Task | null;
    onCancel: () => void;
    onSubmit: (value: Task) => void
}

type FormError = {
    title?: string;
    description?: string;
    deadline?: string;
};

const TaskForm = ({ value, onSubmit, onCancel }: Props) => {

    const [title, setTitle] = useState(value?.title || "");
    const [description, setDescription] = useState(value?.description || "");
    const [status, setStatus] = useState<TaskStatus>(value?.status || "TODO");
    const [deadline, setDeadline] = useState(
        value?.deadline ? formatDateTimeLocal(new Date(value.deadline)) : formatDateTimeLocal(new Date())
    );
    const [show, setShow] = useState(!!value);
    const [error, setError] = useState<FormError>({});

    const id = value?.id || uuidv4();
    const createdAt = value?.createdAt || formatDateTimeLocal(new Date());

    const handleSubmit = () => {
        if (validate()) return;

        const task: Task = {
            id: id,
            title: title,
            description: description,
            status: status,
            deadline: deadline,
            createdAt: createdAt,

        }

        onSubmit(task);
        setShow(false);
        clearForm();

    }

    const validate = () => {

        const newErr: FormError = {};

        if (!title?.trim()) newErr.title = "Title is required!";
        if (!description?.trim()) newErr.description = "Description is required!";
        if (!deadline?.trim()) newErr.deadline = "Deadline is required!";

        setError(newErr);

        return Object.keys(newErr).length > 0;

    }

    const clearError = (key: keyof FormError) => {
        setError((prevErr) => {

            const newErr = { ...prevErr };
            delete newErr[key];
            return newErr;
        })
    }

    const clearForm = () => {
        setTitle("");
        setStatus("TODO");
        setDescription("");
        setDeadline(formatDateTimeLocal(new Date()));
        setError({});
    }


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
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    clearError("title");
                                }}
                                type="text"
                                autoFocus
                                placeholder="Title name..."
                                className={`${error.title ? "border-red-500" : ""} border w-full rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400`}
                            />
                            {error.title && (
                                <span className="text-red-500">{error.title}</span>
                            )}

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
                                onChange={(e) => {
                                    setDeadline(e.target.value);
                                    clearError("deadline")
                                }}
                                type="datetime-local"
                                className={`${error.deadline ? "border-red-500" : ""} border w-full rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400`}
                            />
                            {error.deadline && (
                                <span className="text-red-500">{error.deadline}</span>
                            )}
                        </div>
                    </div>
                    <div className="mb-4 md:p-1">
                        <label htmlFor="description" className="block">Description</label>
                        <textarea
                            placeholder="Description..."
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                clearError("description");
                            }}
                            id="description"
                            className={`${error.description ? "border-red-500" : ""} w-full border rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400`}>
                        </textarea>
                        {error.description && (
                            <span className="text-red-500">{error.description}</span>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                setShow(false);
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
                            {!value ? "Add Task" : "Update Task"}
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
