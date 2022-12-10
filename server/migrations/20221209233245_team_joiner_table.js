exports.up = function(knex) {
    return knex.schema.createTable('team_joiner', (table) => {
        table.integer('PlayerID');
        table.string('FirstName');
        table.string('LastName');
        table.string('PhotoUrl');
        table.string('Team');
        table.string('Position');
        table.integer('FantasyPointsFanDuel');
        table.integer('PassingYards');
        table.integer('PassingTouchdowns');
        table.integer('PassingInterceptions');
        table.integer('RushingYards');
        table.integer('RushingTouchdowns');
        table.integer('ReceivingYards');
        table.integer('ReceivingTouchdowns');
        table.integer('Fumbles');
        table.string('TeamId');
        table.string('TeamName');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('team_joiner')
};
