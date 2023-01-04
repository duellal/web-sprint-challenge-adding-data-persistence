exports.seed = async function(knex) {
  await knex('tasks').insert([
    {task_id: 1, task_description: `Complete Seeds`, task_notes: `by making them and writing them in with VS Code`, task_completed: true, project_id: 1},
    {task_id: 2, task_description: `Project Model`, task_notes: `Make the backend model for the api to grab in the router`, task_completed: false, project_id: 1},
    {task_id: 3, task_description: `Test`, project_id: 2}
  ]);
};
