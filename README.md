# Team Task Manager

A full-stack web application to manage team tasks, track progress, and handle user authentication.

## 🔗 Link:
https://frontend-production-40669.up.railway.app/login

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

## 📸 Screenshot
<img width="498" height="500" alt="image" src="https://github.com/user-attachments/assets/ac8f8565-ddad-4236-855b-93ffebeb7e14" />
<img width="1466" height="869" alt="image" src="https://github.com/user-attachments/assets/0626c560-4cdf-47aa-8e96-62fb8ed6ecdb" />
<img width="1466" height="869" alt="image" src="https://github.com/user-attachments/assets/13fd68b8-3560-433a-a882-8f3c7ca7373c" />
<img width="1466" height="869" alt="image" src="https://github.com/user-attachments/assets/f7405096-d6b7-47f7-a6ef-c57584cd38b4" />




## 👨‍💻 Author

* Jary Abbas

## 📌 Notes

* Make sure MongoDB is running locally or use MongoDB Atlas
* Backend runs on port 5000 by default
* Frontend runs on Vite dev server

## 📄 License

This project is for educational purposes.
