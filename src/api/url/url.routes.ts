import { Router } from "express";
import Url from "./url.model";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "HEllo world",
  });
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { url, url_id } = req.body;
  try {
    await Url.create({ url, url_id });
    res.json({
      message: "New url created",
      url: `http://localhost:5050/${url_id}`,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
