const { response } = require("express");
const Project = require("../models/project");

const getProjects = async (req, res = response) => {

    try {
        const projects = await Project.find();
    
        res.json(projects);
      } catch (e) {
        console.log(e);
        throw new Error("Error", e);
      }
};

module.exports = {
    getProjects
};
