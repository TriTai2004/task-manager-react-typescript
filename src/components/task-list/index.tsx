import type { Task } from "../../types/task";
import TaskItem from "../task-item"

interface Props {
    tasks: Task[],
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}
const TaskList = ({ tasks, onEdit, onDelete }: Props) => {

    return (
        <div className="space-y-3">
            {tasks && tasks.map((task) => (
                <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default TaskList;