const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 3000;
    this.projectsPath = '/api/projects';
    this.featuresPath = '/api/features';
    this.emailPath = '/api/email';

    this.connectDB();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  async connectDB() {
    await dbConnection();
  }

  routes() {
    this.app.use(this.projectsPath, require("../routes/project.routes"));
    this.app.use(this.featuresPath, require("../routes/feature.routes"));
    this.app.use(this.emailPath, require("../routes/email.routes"));
  }

  async listen() {
    try {
      await this.app.listen(this.PORT);
      console.log(`Server listens on port ${this.PORT}`);
    } catch (err) {
      console.log("Error -> ", err);
      process.exit(1);
    }
  }
}

module.exports = Server;
