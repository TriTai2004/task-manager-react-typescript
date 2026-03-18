export const formatDateTimeLocal = (date: Date) => {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export const formatMMDDYYYY = (date: Date) => {
  const pad = (n: number) => n.toString().padStart(2, "0");
  const month = pad(date.getMonth() + 1); 
  const day = pad(date.getDate());
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};


export const formatMMDDYYYYHHMM = (date: Date) => {
  const pad = (n: number) => n.toString().padStart(2, "0");

  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const year = date.getFullYear();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${month}/${day}/${year} ${hours}:${minutes}`;
};