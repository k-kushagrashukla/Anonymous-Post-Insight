const express = require("express");
const router = express.Router();
const analyzeText = require("../utils/analyzer");

router.post("/", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      error: "Text is required"
    });
  }

  const result = analyzeText(text);

  res.json(result);
});

module.exports = router;