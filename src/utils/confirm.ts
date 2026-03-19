import Swal from "sweetalert2";

export const confirmDelete = async () => {
  const res = await Swal.fire({
    title: "Delete this task?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#ef4444",
  });

  return res.isConfirmed;
};