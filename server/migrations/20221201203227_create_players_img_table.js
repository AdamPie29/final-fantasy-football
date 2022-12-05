exports.up = function(knex) {
    return knex.schema.createTable('players_statistics', (table) => {
        table.integer('PlayerID').primary().notNullable();
        table.integer('Season');
        table.string('Team');
        table.integer('Number');
        table.string('Name');
        table.string('Position');
        table.string('PositionCategory');
        table.integer('PassingYards');
        table.integer('PassingTouchdowns');
        table.integer('Passinginterceptions');
        table.integer('PassingSacks');
        table.integer('RushingYards');
        table.integer('RushingTouchdowns');
        table.integer('Receptions');
        table.integer('ReceivingYards');
        table.integer('ReceivingTouchdowns');
        table.integer('Fumbles');
        table.integer('FantasyPoints');
        table.integer('TeamID');
    })
    .createTable('players_images', (table) => {
        table.integer('PlayerID').primary().notNullable();
        table.string('Team');
        table.integer('Number');
        table.string('FirstName');
        table.string('LastName');
        table.string('Position');
        table.string('Status');
        table.string('Height');
        table.integer('Weight');
        table.integer('BirthDate');
        table.string('College');
        table.integer('Experience');
        table.string('FantasyPosition');
        table.string('PositionCategory');
        table.string('PhotoUrl');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('players_stats')
};

exports.down = function(knex) {
    return knex.schema.dropTable('players_img')
};
