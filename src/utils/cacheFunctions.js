function generateUniqueId() {
    return Math.random()
        .toString(36)
        .substring(2)
}

function constructCacheKey(key) {
    return `https://router.wishee.workers.dev/${key}`
}

export { generateUniqueId, constructCacheKey }