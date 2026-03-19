import type { Task } from "../../types/task";
import { getDeadlineWarning, isDeadlineExpired } from "../../utils/deadlineWarning";
import { formatMMDDYYYYHHMM } from "../../utils/formatDate";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onEdit, onDelete }: Props) => {

  const getStatusColor = (status: string) => {
    switch (status) {
      case "TODO":
        return "bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20";
      case "IN_PROGRESS":
        return "bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10";
      case "DONE":
        return "bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div
      className="flex p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex-1 space-y-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-lg truncate">
          {task.title}
        </h3>

        {task.description && (
          <p className="text-gray-500 text-sm  break-words break-all">
            {task.description}
          </p>
        )}

        {task.deadline && (
          <p className="flex-col sm:flex-row items-center gap-2 text-sm text-gray-600">

            <span>Deadline: {formatMMDDYYYYHHMM(new Date(task.deadline))}</span>

            {getDeadlineWarning(task) && (
              <span className="sm:ml-2 mt-2 sm:mt-0 inline-flex items-center rounded-md bg-yellow-50 sm:px-2 sm:py-1 text-xs font-medium
                   text-yellow-700 inset-ring inset-ring-red-600/10">
                Deadline approaching!
              </span>
            )}
            {isDeadlineExpired(task) && (
              <span className="sm:ml-2 mt-2 sm:mt-0 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium
                   text-red-700 inset-ring inset-ring-red-600/10">
                Overdue!
              </span>
            )}
          </p>
        )}
      </div>

      <div className="flex flex-col items-end justify-between gap-2 mt-3 sm:mt-0">
        <span
          className={`inline-flex items-center rounded-md ${getStatusColor(
            task.status
          )}`}
        >
          {task.status.replace("_", " ")}
        </span>

        <div className="flex items-center">
          <button
            onClick={() => onEdit(task)}
          >
            <HiOutlinePencil className="text-blue-500 mr-2 hover:size-5 transition-all" />
          </button>

          <button
            onClick={() => onDelete(task.id)}
          >
            <HiOutlineTrash className="text-red-500 hover:size-5 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;