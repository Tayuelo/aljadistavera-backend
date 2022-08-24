const fastify = require('fastify');

const { dbConnection } = require("../db/config");

class Server {
    constructor() {
        this.app = fastify();
        this.port = process.env.PORT;
        this.connectDB();
        this.registerPlugins();
    }

    async connectDB() {
        await dbConnection();
    }

    registerPlugins() {
        this.app.register(require('@fastify/cors'));
        this.app.register(require('../routes/routes'));
    }

    async listen() {
        try {
            await this.app.listen({ port: 3000 });
            console.log('Server is running on port 3000');
        } catch (err) {
            this.app.log.error(err);
            process.exit(1);
        }
    }
}

module.exports = Server;