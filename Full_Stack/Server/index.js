require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authroutes = require("./routes/authroutes");
const app = express();

const PORT = process.env.PORT || 3200;

// DB connect
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/auth", authroutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
