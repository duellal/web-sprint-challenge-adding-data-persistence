/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema  
        .createTable(`projects`, p_table => {
            p_table.increments(`project_id`)
            p_table.string(`project_name`)
                .notNullable()
            p_table.string(`project_description`)
            p_table.boolean(`project_completed`)
                .notNullable()
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
                .notNullable()
                .defaultTo(false)
            t_table.string(`project_id`)
                .unsigned()
                .notNullable()
                .references(`projects`)
                .onDelete('RESTRICT')
                .onUpdate(`RESTRICT`)
        })
        .createTable(`project_resources`, ra_table => {
            ra_table.increments(`ra_id`)
            ra_table.string(`project_id`)
                .unsigned()
                .notNullable()
                .references(`projects`)
                .onDelete('RESTRICT')
                .onUpdate(`RESTRICT`)
            ra_table.string(`resource_id`)
                .unsigned()
                .notNullable()
                .references(`projects`)
                .onDelete('RESTRICT')
                .onUpdate(`RESTRICT`)
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    await knex.schema  
        .dropTableIfExists(`project_resources`)
        .dropTableIfExists(`tasks`)
        .dropTableIfExists(`resources`)
        .dropTableIfExists(`projects`)
};
