const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Root check
app.get("/", (req, res) => {
  res.send("MUSE backend is live 🚀");
});

// Health check (IMPORTANT)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "muse-backend",
    uptime: process.uptime(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

