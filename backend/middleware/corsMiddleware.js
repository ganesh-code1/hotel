import cors from "cors";

export const corsMiddleware = cors({
  origin: [
    /http:\/\/localhost(:\d+)?/, 
    /http:\/\/192\.168\.29\.112(:\d+)?/, 
    "https://hotel-three-psi.vercel.app",
    "https://hotel-oeba.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type", 
    "Authorization",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin"
  ],
  exposedHeaders: ["Authorization"],
  credentials: true,
});