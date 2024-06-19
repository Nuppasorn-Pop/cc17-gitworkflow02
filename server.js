const express = require("express");
const { notfoundMiddleware } = require("./middleware/notfound-middleware");
const registerRouter = require("./routes/register-route");
const app = express();

app.use("/register", registerRouter);
app.use(notfoundMiddleware);
const port = 8000;
app.listen(port, () => {
  console.log("server on", port);
});
