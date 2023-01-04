const db = require(`../../data/dbConfig`)

const findAllTasks = async () => {
    const tasks = await db(`tasks`)
        .select(`*`)

    return tasks
}

const addTask = (task) => {
    return db(`tasks`)
        .insert(task)
        .then(id => {
            return db(`tasks`).where(`task_id`, id).first()
        })
        .catch(err => console.log(`ERROR occurred in tasks model add function`, err))
}

module.exports = {
    findAllTasks,
    addTask
}