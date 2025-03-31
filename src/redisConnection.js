import dotenv from "dotenv";
import Redis from 'ioredis';
dotenv.config();

const redisConnection = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    maxRetriesPerRequest: null,
    enableReadyCheck: false
});

redisConnection.on("error", (err) => {
    console.error("Redis Connection error:", err);
});

export { 
    redisConnection
};

