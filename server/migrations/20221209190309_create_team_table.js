exports.up = function(knex) {
    return knex.schema.createTable('teams', (table) => {
        table.uuid('id').primary();
        table.integer('user_id');
        table.string('team_name');
        table.integer('player_id1');
        table.integer('player_id2');
        table.integer('player_id3');
        table.integer('player_id4');
        table.integer('player_id5');
        table.integer('player_id6');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('teams');
};