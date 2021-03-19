exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name',128).notNullable()
        tbl.string('project_description',200)
        tbl.boolean('project_completed').defaultTo(false)
    })
    .createTable('resource', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name').notNullable().unique()
        tbl.string('resource_description',300)
    })
    .createTable('task', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description', 300).notNullable()
        tbl.string('task_notes',300)
        tbl.boolean('task_completed').defaultTo(false)
        tbl.integer('project_id')
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')

    });
};

exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('task')
      .dropTableIfExists('resource')
      .dropTableIfExists('projects')
};