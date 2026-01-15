import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

/* Health check */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* LOGIN API */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Temporary demo login (no DB yet)
  if (email && password) {
    return res.json({
      success: true,
      token: "demo-token-123",
      user: { email }
    });
  }

  res.status(400).json({
    success: false,
    message: "Invalid credentials"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
