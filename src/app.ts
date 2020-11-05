import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { notFoundHandler, errorHandler } from "./middlewares/middlewares";
import path from "path";
import api from "./api/api";
import connectToDb from "./db";

const app = express();

connectToDb();

app.set("views", path.join(__dirname + "/../views"));
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname + "/../public")));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/api/v1", api);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
