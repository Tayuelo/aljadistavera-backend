const { Router } = require("express");
const {
  main
} = require("../controllers/email.controller");

const router = Router();

router.post("/send", main);

module.exports = router;