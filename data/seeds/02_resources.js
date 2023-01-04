exports.seed = async function(knex) {
  await knex('resources').insert([
    {id: 1, resource_name: 'Slack', resource_description: `Messaging platform`},
    {id: 2, resource_name: 'VS Code', resource_description: `A program for making, editing, and updating code`},
    {id: 3, resource_name: 'gitHub', resource_description: `A website to host code`},
    {id: 4, resource_name: 'My sister', resource_description: `Very knowledgable resource that can help when needed. Will make you think.`},
  ]);
};
