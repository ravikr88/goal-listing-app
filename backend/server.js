const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorMiddleware");
const goalsRoutes = require("./routes/goalRoutes");
const connectDB = require("./config/db");
connectDB();
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Mount the goals routes
app.use("/api/goals", goalsRoutes);

// Use the error handler middleware
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server live on port ${port}...`);
});
