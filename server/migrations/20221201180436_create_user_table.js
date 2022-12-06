exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.uuid('id').primary();
        table.string('user_name').notNullable().unique();
        table.string('user_email').notNullable().unique();
        table.string('user_password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');  
};
