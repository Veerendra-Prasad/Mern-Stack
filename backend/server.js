import express from "express";
import cors from "cors";
import { email, mobile, image } from "./verfication.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/create", (req, res) => {
  const details = req.body;
  const data = details.body;
  try {
    if (email(data.email) && mobile(data.mobile) && image(data.img)) {
      res
        .status(200)
        .json({ success: true, message: "Product added", data: details });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Please Enter Correct Details" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.put("/api/edit", (req, res) => {
  const details = req.body;
  const data = details.body;
  try {
    if (email(data.email) && mobile(data.mobile) && image(data.img)) {
      res
        .status(200)
        .json({ success: true, message: "Product Updated", data: details });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Please Enter Correct Details" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
