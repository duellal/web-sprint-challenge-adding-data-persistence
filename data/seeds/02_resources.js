exports.seed = async function(knex) {
  await knex('resources').insert([
    {
      resource_id: 1, 
      resource_name: 'Slack', 
      resource_description: `Messaging platform`
    },
    {resource_id: 2,
      resource_name: 'VS Code', 
      resource_description: `A program for making, editing, and updating code`
    },
    {resource_id: 3, 
      resource_name: 'gitHub', 
      resource_description: `A website to host code`
    },
    {resource_id: 4, 
      resource_name: 'My sister', 
      resource_description: `Very knowledgable resource that can help when needed. Will make you think.`
    },
  ]);
};
