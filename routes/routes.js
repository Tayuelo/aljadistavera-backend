
const Project = require("../models/project");

async function routes(fastify, options) {

    fastify.get('/', async (request, reply) => {
        
        reply.send('Hola mamá');
    });

    fastify.get('/projects', async (request, reply) => {
        try {
            const projects = await Project.find();
            reply.send(projects);

        } catch (err) {
            console.log(err);
            throw new Error("Error", err);
        }
    })

    fastify.post('/project', async (request, reply) => {
        const { name, description, img, stack, company, duration } = request.body;
        const project = new Project({ name, description, img, stack, company, duration });

        try {
            await project.save();
        } catch (e) {
            console.log(e);
            throw new Error("Error", e);
        }

        reply.send({
            project,
        });
    });
}

module.exports = routes;