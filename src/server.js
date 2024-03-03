import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static("../dist"));
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
