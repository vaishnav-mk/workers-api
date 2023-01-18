module.exports = {
    method: 'GET',
    path: '/ping',
    handler: () => {
        return new Response(
            JSON.stringify({ message: `pong! working fine @ ${new Date()}` }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    },
}
