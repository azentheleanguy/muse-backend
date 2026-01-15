const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.send("MUSE backend is live 🚀");
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ✅ LOGIN ROUTE (THIS WAS MISSING)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  // TEMP login (we'll add real auth later)
  res.json({
    success: true,
    token: "demo_muse_token_123",
    user: { email }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
