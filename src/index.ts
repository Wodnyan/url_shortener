import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { notFoundHandler, errorHandler } from "./middlewares/middlewares";
import api from "./routes/api/api";

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/v1", api);

app.use(notFoundHandler);
//Error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
