# Task Manager SPA

Ứng dụng quản lý công việc cá nhân được xây dựng bằng **React + TypeScript + Vite**.  
Cho phép người dùng thêm, sửa, xóa, tìm kiếm và theo dõi trạng thái công việc.

---

# Công nghệ sử dụng

- React (Functional Components + Hooks)
- TypeScript
- Vite
- TailwindCSS
- LocalStorage (lưu dữ liệu)
- UUID (tạo ID cho task)
- Sweetalert2
- React-toastify
- React-icons

# Tính năng

- Thêm / sửa / xóa công việc
- Hiển thị danh sách theo trạng thái:
  - TODO
  - In Progress
  - Done
- Tìm kiếm theo tên công việc
- Lọc theo trạng thái
- Lưu dữ liệu bằng LocalStorage
- Thiết lập deadline cho từng task
- Cảnh báo khi:
  - Gần đến hạn
  - Quá hạn
- Thống kê nhanh:
  - Tổng số task
  - Số task hoàn thành
  - Số task quá hạn
- Giao diện responsive (mobile & desktop)

---

# Cài đặt & chạy project

## Clone repository

git clone https://github.com/TriTai2004/task-manager-react-typescript.git

## Di chuyển vào thư mục project

cd task-manager-react-typescript

## Cài dependencies

npm install

## Chạy project

npm run dev

Ứng dụng sẽ chạy tại:

http://localhost:5173

---

# Quyết định kỹ thuật

## 1. State Management
- Sử dụng React Hooks (useState, useEffect) kết hợp với custom hook useTasks.
- Tách logic xử lý task (CRUD, filter, search) ra khỏi UI.
- Giúp code dễ bảo trì, tái sử dụng và mở rộng.

## 2. Data Persistence (LocalStorage)
- Dữ liệu task được lưu trong localStorage.
- Khi ứng dụng khởi động:
  - Load dữ liệu từ localStorage.
- Khi có thay đổi:
  - Tự động sync lại vào localStorage.
- Đảm bảo dữ liệu không bị mất khi reload trình duyệt.

## 3. Form Handling
- Validate dữ liệu trước khi submit:
  - Kiểm tra dữ liệu bắt buộc

## 4. Deadline Handling
- Sử dụng Date để xử lý thời gian.
- So sánh thời gian hiện tại với deadline để xác định:
  - Task gần đến hạn
  - Task quá hạn
- Hiển thị cảnh báo trực quan trên UI.

## 5. Search & Filter
- Tìm kiếm theo tên task.
- Lọc theo trạng thái (TODO / In Progress / Done).
- Kết hợp nhiều điều kiện lọc phía client để tăng trải nghiệm nhanh.

---

# Hướng cải thiện nếu có thêm thời gian

- Tích hợp backend (Node.js / Spring Boot)
- Thêm authentication (đăng nhập / đăng ký)
- Phân quyền người dùng
- Thêm pagination hoặc infinite scroll khi danh sách lớn
- Tối ưu performance (useMemo, useCallback)
- Cải thiện UI/UX:
  - Animation
  - Loading skeleton
  - Drag & drop task giữa các trạng thái
---

# Repository

https://github.com/TriTai2004/task-manager-react-typescript