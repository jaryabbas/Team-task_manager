# Team Task Manager

A full-stack web application to manage team tasks, track progress, and handle user authentication.

## 🚀 Features

* User authentication (login/signup)
* Create, update, and delete tasks
* Assign tasks to team members
* Track task status (pending, in progress, completed)
* Responsive UI for better usability

## 🛠 Tech Stack

**Frontend**

* React.js
* Vite
* CSS / Tailwind (if used)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

## 📂 Project Structure

```
Team-task_manager/
│── client/        # Frontend (React)
│── server/        # Backend (Node + Express)
│── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/jaryabbas/Team-task_manager.git
cd Team-task_manager
```

### 2. Setup Backend

```
cd server
npm install
npm start
```

### 3. Setup Frontend

Open new terminal:

```
cd client
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

## 🌐 API Endpoints (Sample)

* POST `/api/auth/register` → Register user
* POST `/api/auth/login` → Login user
* GET `/api/tasks` → Get all tasks
* POST `/api/tasks` → Create task

## 📸 Screenshots

(Add screenshots here if required)

## 👨‍💻 Author

* Sayed Jary Abbas

## 📌 Notes

* Make sure MongoDB is running locally or use MongoDB Atlas
* Backend runs on port 5000 by default
* Frontend runs on Vite dev server

## 📄 License

This project is for educational purposes.
