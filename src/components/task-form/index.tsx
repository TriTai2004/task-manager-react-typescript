import { useState } from "react";

const TaskForm = () => {


    const [show, setShow] = useState(false);


    return (
        <>
            {show && (
                <div className="border md:p-4 rounded p-3">
                    <div className="grid md:grid-cols-3">
                        <div className="mb-4 md:p-1">
                            <label htmlFor="title" className="block">Title</label>
                            <input
                                id="title"
                                type="text"
                                placeholder="Task name..."
                                className="border w-full rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />

                        </div>
                        <div className="mb-4 md:p-1">
                            <label htmlFor="status" className="block">Status</label>
                            <select
                                id="status"
                                className="border w-full focus:ring-1 focus:ring-blue-400 outline-none rounded-lg p-2">
                                <option value="TODO">TODO</option>
                                <option value="IN_PROGRESS">IN_PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>
                        <div className="mb-4 md:p-1">
                            <label htmlFor="deadline" className="block">Deadline</label>
                            <input
                                id="deadline"
                                type="date"
                                className="border w-full rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div className="mb-4 md:p-1">
                        <label htmlFor="description" className="block">Description</label>
                        <textarea
                            placeholder="Description..."
                            id="description" className="w-full border rounded-lg p-2 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400">
                        </textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => setShow(!show)}
                            className="p-2 rounded text-white bg-gray-500 focus:outline-none me-2">
                            Cancel
                        </button>
                        <button className="p-2 rounded text-white bg-gradient-to-r from-cyan-500
                             to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 transition">
                            Add Task
                        </button>
                    </div>
                </div>
            )}

            {!show && (
                <button
                    onClick={() => setShow(!show)}
                    className="p-2 w-full rounded text-white bg-gradient-to-r from-cyan-500
                     to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 transition">
                    Add Task
                </button>
            )}
        </>
    )
}

export default TaskForm;
