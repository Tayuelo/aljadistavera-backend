const { Router } = require("express");
const {
  getFeatures
} = require("../controllers/feature.controller");

const router = Router();

router.get("/", getFeatures);

module.exports = router;