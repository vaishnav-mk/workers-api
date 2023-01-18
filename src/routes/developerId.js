import { generateUniqueId, constructCacheKey } from '../utils/cacheFunctions'
module.exports = {
    method: 'GET',
    path: '/developer/:id',
    handler: async (cache, request) => {
        const cacheKey = constructCacheKey(request.params.id)

        let developer = await cache.match(cacheKey)

        if (!developer) {
            return new Response(
                JSON.stringify({
                    message: 'developer not found',
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    status: 404,
                }
            )
        } else {
            developer = await developer.json()
            return new Response(
                JSON.stringify({
                    message: 'developer found',
                    developer: developer,
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
        }
    },
}
