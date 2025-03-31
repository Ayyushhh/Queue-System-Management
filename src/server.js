import express from 'express';
import { addJobToQueue, getAllJobs, getJobById, removeJobById } from './jobQueue.js';

const app = express();
app.use(express.json());
const PORT = 3000;

app.post("/add-task", async (req,res) => {
    const { taskType, payload } = req.body;
    await addJobToQueue(taskType,payload);
    res.json({
        message: "Task Addded to queue"
    });
});

app.get("/jobs", getAllJobs);
app.get("/status/:id", getJobById);
app.delete("/remove-job/:id", removeJobById);

app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`);
});