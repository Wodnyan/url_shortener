import { Router } from "express";
import url from "./url/url.routes";

const router = Router();

router.use("/url", url);

export const messages = {
  root: "Welcome to my API",
};

router.get("/", (_, res) => {
  res.json({
    message: messages.root,
  });
});

export default router;
