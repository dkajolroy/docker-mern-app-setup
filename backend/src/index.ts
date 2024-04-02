import express from "express";
const app = express();

app.use("/", (req, res) => {
  res.status(200).send({ message: "Server successfully running  !" });
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
