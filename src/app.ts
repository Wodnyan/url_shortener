import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { notFoundHandler, errorHandler } from "./middlewares/middlewares";
import api from "./api/api";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/v1", api);

app.use(notFoundHandler);
//Error handler
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome!",
  });
});

export default app;
