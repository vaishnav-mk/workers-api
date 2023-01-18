## workers-api
A small API built on top of Cloudflare Workers using the cache API and the [`itty-router`](https://github.com/kwhitley/itty-router) package to add routing.

- Check out the [live demo](https://router.wishee.workers.dev)!

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/vaishnav-mk/workers-api)

### Usage
1. Clone the repo
2. Run `npm install`
3. Run `wrangler dev` to start the development server
4. Run `wrangler publish` to publish the worker

### Routes
- `/` - Returns a JSON object with the message `Hello, World!` - `GET`
- `/ping` - Returns a JSON object with the message `Pong!` and the current time - `GET`
- `/developer` - Create a cache entry for a developer with any body - `POST`
- `/developer/:id` - Get a developer with the given ID - `GET`

### Example
#### Using `curl` to create a developer
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Vaishnav M K", "website": vaishnav.tech}' https://router.wishee.workers.dev/developer
```

#### Using `curl` to get a developer
```bash
curl https://router.wishee.workers.dev/developer/99xibk9eoij
```

#### Using native fetch to create a developer
```js
fetch('https://router.wishee.workers.dev/developer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Vaishnav M K',
    website: 'vaishnav.tech'
  })
})
```

#### Using native fetch to get a developer
```js
fetch('https://router.wishee.workers.dev/developer/99xibk9eoij')
```
