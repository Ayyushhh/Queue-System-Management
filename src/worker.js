import { Worker } from "bullmq";
import { redisConnection } from "./src/redisConnection.js";

const worker = new Worker(
    "taskQueue", 
    async(job) =>{
        console.log(`Processing Job: ${job.name} with data: ${job.data}`);
        await new Promise((resolve) => setTimeout(resolve,5000));
        console.log(`Job completed: ${job.id}`);
    }, 
    {connection: redisConnection}
);

worker.on("completed", (job) => console.log(`Job ${job.id} completed`));
worker.on("failed", (job,err) => console.log(`Job ${job.id} failed`, err));