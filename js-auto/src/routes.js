import express from "express";
const router = express.Router();
import codesController from "./controller/codes.js";

router.get("/code", async function (req, res, next) {
  const codes = await codesController.index();
  res.send(codes);
});
router.post("/code", async function (req, res, next) {
  const code = await codesController.create();
  res.send(code);
});

export default router;
