# 🚀 Queue Management System

## 📌 Overview
This project is a **Queue Management System** built using **Node.js**, **BullMQ**, and **Redis**. It efficiently handles background job processing, ensuring tasks like email sending, video encoding, and API rate-limiting are processed asynchronously without blocking the main application.

## 🛠️ Tech Stack
- **Node.js** - Backend runtime
- **Express.js** - API framework
- **BullMQ** - Job queue management
- **Redis** - In-memory data store
- **ioredis** - Redis client for Node.js
- **Docker** (Optional) - For Redis containerization

## 🎯 Features
✅ **Job Queues**: Create and process jobs efficiently
✅ **Background Task Processing**: Handles heavy operations asynchronously
✅ **Job Retries & Failure Handling**: Retries failed jobs automatically
✅ **Rate Limiting**: Prevents excessive API requests
✅ **Scalability**: Supports multiple workers for parallel processing
✅ **Redis-based Storage**: Fast and reliable queue management

## 🚀 Getting Started

### 📂 Project Structure
```
📦 queue-management-system
 ┣ 📂 src
 ┃ ┣ 📜 server.js  # Express server setup
 ┃ ┣ 📜 queue.js   # Job queue setup
 ┃ ┣ 📜 worker.js  # Worker processing logic
 ┃ ┣ 📜 redisConnection.js  # Redis client configuration
 ┣ 📜 .env        # Environment variables
 ┣ 📜 package.json
 ┣ 📜 README.md
```

### 🔧 Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **Redis** (Standalone or via Docker)
- **Docker** (Optional, for Redis setup)

### 📥 Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/yourusername/queue-management.git
cd queue-management
npm install
```

### ⚙️ Setup Redis
#### Option 1: Install Redis Locally
- **Linux/macOS**:
```sh
brew install redis  # macOS (Homebrew)
sudo apt install redis-server  # Ubuntu/Debian
```
#### Option 2: Using Docker
```sh
docker run -d --name redis -p 6379:6379 redis
```

### 🌍 Environment Variables
Create a `.env` file and add:
```env
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### 🚦 Running the Project
#### 1️⃣ Start the Queue Worker
```sh
node src/worker.js
```
#### 2️⃣ Start the Express Server
```sh
node src/server.js
```

### 📌 Usage Example
#### 🎯 Adding a Job to the Queue
```sh
curl -X POST http://localhost:3000/add-job -H "Content-Type: application/json" -d '{"type": "email", "data": {"to": "user@example.com"}}'
```

#### 📜 Checking Job Status
```sh
curl -X GET http://localhost:3000/jobs
```

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/add-job` | Adds a job to the queue |
| `GET` | `/jobs` | Lists all jobs |
| `GET` | `/status/:id` | Fetches job status |
| `DELETE` | `/remove-job/:id` | Removes a job |

## 🛠️ How It Works
1. **Client** sends a request to add a job (e.g., email, video processing).
2. **BullMQ** pushes the job into a Redis queue.
3. **Worker** processes jobs asynchronously.
4. **Status updates** can be retrieved via API.
5. **Retries** failed jobs automatically.

## 🎯 Future Enhancements
- ✅ Add **Bull Board** UI for job monitoring
- ✅ Implement **priority-based job scheduling**
- ✅ Improve **logging and error handling**

## 🏆 Contributing
Feel free to **fork**, **clone**, and **open PRs** to improve the project! 🎉

## 📜 License
MIT License. Free to use and modify.