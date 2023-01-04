exports.seed = async function(knex) {
  await knex('projects').insert([
    {project_id: 1, project_name: 'Finish Sprint', project_description: ``, project_completed: false},
    {project_id: 2, project_name: 'Testing happening', project_description: `Test test 1, 2, 3`, project_completed: true},
    {project_id: 3, project_name: 'Enjoy!'},
  ]);
};
