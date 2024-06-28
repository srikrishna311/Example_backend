const express = require('express');

const router = express.Router();

router.post("/join", async (req, res) => {
  const username = req.body;
  const opt = await Admin.find(a => a.username === username)
  if (opt) {
    res.send("already there")
  }
  else {
    Admin.push({ username })
    res.send("Not there")
  }
})

module.exports = router;
