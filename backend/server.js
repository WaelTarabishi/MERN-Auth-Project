import express from "express";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js";
import { erroHandler, notFound } from "./Middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import color from "colors";
import path from "path";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = process.env.PORT || 5000;
app.use("/api/users", userRoutes);
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "fronted", "dist", "index.html"));
  });
} else {
  app.get();
}
app.use(notFound);
app.use(erroHandler);
app.listen(port, console.log(`Server Started on Port ${port}`.red));
