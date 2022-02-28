const express = require("express");
const cors = require("cors");
const bodyParser = require("bodyparser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Server Running...");
});
