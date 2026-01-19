require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// 👇 THIS LINE IS VERY IMPORTANT
connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/shifts", require("./routes/shiftRoutes"));
app.use("/api/assignments", require("./routes/assignmentRoutes"));

// 👇 THIS MUST EXIST
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
