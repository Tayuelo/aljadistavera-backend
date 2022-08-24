const fastifyPlugin = require('fastify-plugin')
/**
 * Connects to a MongoDB database
 * @param {FastifyInstance} fastify Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function dbConnector(fastify, options) {
    fastify.register(require('@fastify/mongodb'), {
        forceClose: true,
        url: 'mongodb+srv://aljadistavera:c3rKOwqzlBB2oqO6@aljadistavera-1.ppoks50.mongodb.net/?retryWrites=true&w=majority'
        
    });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector)