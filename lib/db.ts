import mongoose from "mongoose";

const MONGODB_URI = String(process.env.MONGODB_URI || "");

async function connectDB() {
  // Skip connection if MONGODB_URI is not available (e.g., during build time)
  if (!MONGODB_URI) {
    console.warn("MONGODB_URI not set - skipping database connection");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export { connectDB };
