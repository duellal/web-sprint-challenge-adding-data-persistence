exports.up = async function(knex) {
    await knex.schema  
        .createTable(`projects`, p_table => {
            p_table.increments(`project_id`)
            p_table.string(`project_name`)
                .notNullable()
            p_table.string(`project_description`)
            p_table.boolean(`project_completed`)
                .defaultTo(false)
            })
        .createTable(`resources`, r_table => {
            r_table.increments(`resource_id`)
            r_table.string(`resource_name`)
                .notNullable()
                .unique()
            r_table.string(`resource_description`)
        })
        .createTable(`tasks`, t_table => {
            t_table.increments(`task_id`)
            t_table.string(`task_description`)
                .notNullable()
            t_table.string(`task_notes`)
            t_table.boolean(`task_completed`)
                .defaultTo(false)
            t_table.integer(`project_id`)
                .unsigned()
                .notNullable()
                .references(`project_id`)
                .inTable(`projects`)
                .onDelete('RESTRICT')
                .onUpdate(`RESTRICT`) 
        })
        .createTable(`project_resources`, pr_table => {
            pr_table.increments(`pr_id`)
            pr_table.integer(`project_id`)
                .unsigned()
                .notNullable()
                .references(`project_id`)
                .inTable(`projects`)
                .onDelete('RESTRICT')
                .onUpdate(`RESTRICT`)
            pr_table.integer(`resource_id`)
                .unsigned()
                .notNullable()
                .references(`resource_id`)
                .inTable(`resources`)
                .onDelete('RESTRICT')
                .onUpdate(`RESTRICT`)
        })
};



exports.down = function(knex) {
    return knex.schema  
        .dropTableIfExists(`project_resources`)
        .dropTableIfExists(`tasks`)
        .dropTableIfExists(`resources`)
        .dropTableIfExists(`projects`)
};
