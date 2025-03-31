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

export {
    addJobToQueue
}