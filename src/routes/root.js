module.exports = {
    method: 'GET',
    path: '/',
    handler: () => {
        return new Response(JSON.stringify({ message: 'Hello World!' }), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    },
}
