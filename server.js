const express = require("express");
const { notfoundMiddleware } = require("./middleware/notfound-middleware");
const app = express();

app.use(notfoundMiddleware);
const port = 8000;
app.listen(port, () => {
  console.log("server on", port);
});
