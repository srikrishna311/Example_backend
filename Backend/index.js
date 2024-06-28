const express = require("express");
const app = express();
const cors = require("cors")
var port = 3000

app.use(cors());
Admin = []

app.post("/admin/join", async (req, res) => {
  const username = req.body;
  const ult = await Admin.find(a => a.username === username)
  if (ult) {
    res.send("already there")
  }
  else {
    Admin.push({ username })
    res.send("em lev")
  }
})

app.listen(port, () => {
  console.log("Listening")
})
