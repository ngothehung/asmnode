
import express from "express";

import { getAll, remove, update, get, create } from "../controllers/product";

const router = express.Router();

router.post("/products", create)
router.get("/products", getAll)
router.get("/products", get)
router.delete("/products", remove)
router.patch("/products", update)

export default router;