const express = require("express");
const { doStuff } = require("./do-stuff");

const app = express();
const port = 3001;

app.get("/_api/do-stuff", doStuff);

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
