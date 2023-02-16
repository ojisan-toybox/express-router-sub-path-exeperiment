const express = require("express");

const app = express();

app.get("/hoge/:id/:fuga", (req, res) => {
  console.log(req);
  res.send("ok");
});

app.listen(4000, () => {
  console.log(`Example app listening on port ${4000}`);
});
