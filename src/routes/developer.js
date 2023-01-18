import { generateUniqueId, constructCacheKey } from '../utils/cacheFunctions'
module.exports = {
    method: 'POST',
    path: '/developer',
    handler: async (cache, request) => {
        const developerID = generateUniqueId()

        const cacheKey = constructCacheKey(developerID)

        const expiryDate = new Date()
        expiryDate.setDate(expiryDate.getDate() + 30)

        if (!request.body) {
            return new Response(
                JSON.stringify({
                    message: 'No body provided',
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    status: 400,
                }
            )
        }

        const cacheResponse = new Response(request.body, {
            headers: {
                'Cache-Control': 'public, max-age: 2592000',
                Expires: expiryDate.toUTCString(),
            },
        })

        await cache.put(cacheKey, cacheResponse)

        const requestUrl = new URL(request.url)
        requestUrl.pathname = `/developer/${developerID}`

        return new Response(
            JSON.stringify({
                id: developerID,
                message: `developer created at ${requestUrl}`,
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                status: 201,
            }
        )
    },
}
