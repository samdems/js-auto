import express from "express";

import router from "./routes.js";
const app = express();
const port = 8000;

app.use("/api", router);
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
