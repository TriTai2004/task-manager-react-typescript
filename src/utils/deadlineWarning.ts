import type { Task } from "../types/task";

export const getDeadlineWarning = (task: Task) => {
  if (!task.deadline) return false;

  const now = new Date();
  const deadlineDate = new Date(task.deadline);

  if (isNaN(deadlineDate.getTime())) return false; 

  const diffTime = deadlineDate.getTime() - now.getTime(); 
  const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;

  return diffTime >= 0 && diffTime <= twoDaysInMs;
};

export const isDeadlineExpired = (task: Task) => {
  if (!task.deadline) return false;

  const now = new Date();
  const deadlineDate = new Date(task.deadline);

  if (isNaN(deadlineDate.getTime())) return false;

  return now.getTime() > deadlineDate.getTime();
};