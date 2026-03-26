const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test API
app.get("/api/data", (req, res) => {
  res.json({
    success: true,
    message: "Hello from backend 🚀",
  });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});