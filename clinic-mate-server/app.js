import "./env.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import api from "./routes/index.js";

const app = express();

const uri = "mongodb+srv://arsal0344:03444800061@cluster0.u6h8hwf.mongodb.net/Mydb?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

app.use(express.static("public"));

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world from clinic mate");
});

app.use("/api", api);

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("Server started on port: ", port);
});
