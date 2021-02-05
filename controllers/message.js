const Message = require("../models/message");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Message.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Message.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Message.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Message.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
