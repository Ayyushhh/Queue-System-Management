import { Queue } from 'bullmq';
import { redisConnection } from './redisConnection.js';

const jobQueue = new Queue("taskQueue", {
    connection: redisConnection
});

async function addJobToQueue(taskType, payload) {
    await jobQueue.add(taskType, payload, {
        attempts: 3,
        backoff: 5000
    });
    console.log(`Job Added: ${taskType}`);
}

async function getAllJobs(req,res){
    try {
        const jobs = await jobQueue.getJobs(["waiting","active","completed","failed","delayed"]);
        return res.status(200).json({
            jobs
        });
    } catch (error) {
        return res.status(500).json({
            error: message.error
        });
    }
}

async function getJobById(req,res){
    try {
        const job = await jobQueue.getJob(req.params.id);
        if(!job){
            return res.status(404).json({
                message: "Not Found"
            });
        }
        const state = await job.getState();
        
        return res.status(200).json({
            jobId: job.id, 
            status: state, 
            data: job.data
        });
    } catch (error) {
        return res.status(500).json({
            error: message.error
        });
    }
}

async function removeJobById(req,res) {
    try {
        const job = await jobQueue.getJob(req.params.id);
        if(!job){
            return res.status(404).json({
                message: "Not Found"
            });
        }
        await job.remove();
        return res.status(200).json({
            message: "Job removed"
        });
    } catch (error) {
        return res.status(500).json({
            error: message.error
        });
    }
}

export {
    addJobToQueue,
    getAllJobs,
    getJobById,
    removeJobById
}