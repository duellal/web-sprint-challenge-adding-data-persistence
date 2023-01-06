const db = require(`../../data/dbConfig`)

const findAllTasks = async () => {
    const tasks = await db(`tasks as t`)
        .select(
            `t.*`,
            `p.*`
            )
        .join(`projects as p`, `p.project_id`, `t.project_id`)

    return tasks
}

const addTask = (task) => {
    return db(`tasks`)
        .insert(task)
        .then(id => {
            return db(`tasks`).where(`task_id`, id).first()
        })
}

module.exports = {
    findAllTasks,
    addTask
}