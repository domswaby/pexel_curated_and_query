import express from "express";
import { curatedImages, searchImages } from "../controllers/pexelsController.js";

const router = express.Router();

router.route("/curated").get(curatedImages);
router.route("/search").get(searchImages);

export default router