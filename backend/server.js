import express from "express";
import dotenv from "dotenv";
import pexelsRoutes from "./routes/pexelsRoutes.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Test text");
});

app.use("/api/pexels", pexelsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
