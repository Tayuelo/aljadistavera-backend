async function routes(fastify, options) {
    console.log(fastify);

    const collection = fastify.mongo.db.collection('projects');

    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/projects', async (request, reply) => {
        const result = await collection.find().toArray();
        if (result.length === 0) {
            throw new Error('No documents found')
        }
        return result;
    })
}

module.exports = routes;