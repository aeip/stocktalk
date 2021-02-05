const Message = require("../models/message");
const { Router } = require("express");
const router = Router();

//index route
router.get("/:symbol/", async (req, res) => {
  res.json(await Message.find({}));
});

//create route
router.post("/:symbol/", async (req, res) => {
  res.json(await Message.create(req.body));
});

// EXPORT ROUTER
module.exports = router;
