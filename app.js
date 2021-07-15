const express = require("express");
const { senEmail } = require("./mailer");
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  const recipientemail = "abc@gmail.com";
  try {
    senEmail(recipientemail);
    res.json({ msg: "Email sent" });
  } catch (e) {
    console.log(e);
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
