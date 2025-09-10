import {Ratelimit } from "@upstash/ratelimit"
import {Redis } from "@upstash/redis"

// environment variable
import dotenv from "dotenv"
dotenv.config();

// allow 10 request per 20 second
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "50 s"),
});

export default ratelimit