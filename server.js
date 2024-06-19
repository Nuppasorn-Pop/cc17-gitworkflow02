const express = require("express");
const app = express();

app.use("/login", (req, res, next) => {
  res(200).json({ message });
});

const port = 8000;
app.listen(port, () => {
  console.log("server on", port);
});
