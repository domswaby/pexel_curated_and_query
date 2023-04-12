import express from "express";
import pexelsRoutes from "./routes/pexelsRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Test text");
});

app.use('/api/pexels', pexelsRoutes);

app.listen(5000, console.log("Server started on port 5000..."));
