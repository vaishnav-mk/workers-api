import { Router } from 'itty-router'
import routes from './routes'
const cache = caches.default

const router = Router()
routes.forEach(route => {
    router[route.method.toLowerCase()](
        route.path,
        route.handler.bind(null, cache)
    )
})

router.all(
    '*',
    () =>
        new Response(
            JSON.stringify({
                message: `Route not found! available routes - (${routes
                    .map(i => `'${i.method} - ${i.path}'`)
                    .join(', ')})`,
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
)
addEventListener('fetch', e => {
    e.respondWith(router.handle(e.request))
})
