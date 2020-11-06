import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { notFoundHandler, errorHandler } from "./middlewares/middlewares";
import path from "path";
import api from "./api/api";
import connectToDb from "./db";
import Url from "./api/url/url.model";

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
app.get("/:id", async (req, res, next) => {
  const url = await Url.findOne({ url_id: req.params.id }).select("url");
  if (url) {
    res.redirect(url.url);
  } else {
    const error = new Error("Not Found");
    res.status(404);
    next(error);
  }
});
app.use("/api/v1", api);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
