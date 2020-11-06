import { Router } from "express";
import Url from "./url.model";
import isUrlValid from "../../lib/validateUrl";

const router = Router();

router.post("/", async (req, res, next) => {
  const { url, url_id } = req.body;
  try {
    if (isUrlValid(url)) {
      await Url.create({ url, url_id });
      return res.json({
        message: "New url created",
        url: `http://localhost:5050/${url_id}`,
      });
    } else {
      const error = new Error("Incorrect URL format.");
      res.status(422);
      next(error);
    }
  } catch (error) {
    if (error.code === 11000) {
      const error = new Error("Id is already in use.");
      res.status(409);
      return next(error);
    }
    next(error);
  }
});

export default router;
