
async function routes(fastify, options) {

    fastify.get('/', async (request, reply) => {
        reply.send('Hola mamá');
    });
}

module.exports = routes;