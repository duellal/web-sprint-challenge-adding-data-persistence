const db = require(`../../data/dbConfig`)

const findAllProjects = async () => {
    const projects = await db(`projects`)
        .select(`*`)

    return projects
}

const addProject = (project) => {
    return db(`projects`)
        .insert(project)
        .then(id => {
            return db(`projects`).where(`project_id`, id).first()
        })
}

module.exports = {
    findAllProjects,
    addProject
}