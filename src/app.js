import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./router/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter)
mongoose.connect("mongodb://127.0.0.1:27017/baithi")

export const viteNodeApp = app;


