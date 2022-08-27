const { response } = require("express");
const Feature = require("../models/feature");

const getFeatures = async (req, res = response) => {
  try {
    const features = await Feature.find();

    res.json(features);
  } catch (e) {
    console.log(e);
    throw new Error("Error", e);
  }
};

module.exports = {
    getFeatures,
};
