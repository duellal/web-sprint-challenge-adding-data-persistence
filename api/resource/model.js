const db = require(`../../data/dbConfig`)

const findAllResources = async () => {
    const resources = await db(`resources`)
        .select(`*`)

    return resources
}

const addResource = (resource) => {
    return db(`resources`)
        .insert(resource)
        .then(id => {
            return db(`resources`).where(`resource_id`, id).first()
        })
}

module.exports = {
    findAllResources,
    addResource
}