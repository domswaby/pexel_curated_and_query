import express from "express";
import dotenv from "dotenv";
import pexelsRoutes from "./routes/pexelsRoutes.js";

const app = express(); 
// configure environment which will contain Pexels API key
dotenv.config(); 

app.get("/", (req, res) => {
  res.send("API running...");
});

// this middleware contains routes for getting curated and searched photos
app.use("/api/pexels", pexelsRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
