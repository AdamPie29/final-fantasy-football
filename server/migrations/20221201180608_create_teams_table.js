exports.up = function(knex) {
    return knex.schema.createTable('teams', (table) => {
        table.uuid('id').primary();
        table.string('team_name');
        table.int('player_idQB');
        table.int('player_idRB1');
        table.int('player_idRB2');
        table.int('player_idWR1');
        table.int('player_idWR2');
        table.int('player_idTE');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teams')
};

