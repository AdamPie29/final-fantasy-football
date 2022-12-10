const knex = require('knex')(require('../knexfile'));
require('dotenv').config();
const {uuid} = require('uuidv4');

// Add Team to Table

exports.addTeam = async (req, res) => {
    try {
        const newTeam = req.body;
        console.log(newTeam)
        await knex('teams').insert(newTeam);
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(400).send('Error creating new team');
    }
};

// Get One Team

exports.getOneTeam = async (req, res) => {
    try {
        const teamData = [] = await knex('teams')
        // .join ('players_statistics as player2', 'teams.player_idRB1', '=', 'players_statistics.PlayerID')
        .join ('players_statistics', 'teams.player_id*', '=', 'players_statistics.PlayerID')
        // .join ('players_statistics', 'teams.player_idWR1', '=', 'players_statistics.PlayerID')
        // .join ('players_statistics', 'teams.player_idWR2', '=', 'players_statistics.PlayerID')
        // .join ('players_statistics', 'teams.player_idTE', '=', 'players_statistics.PlayerID')
        // .where here, this would be where team equals user id when i get that functional
        .select('*')
        .where ('id', req.params.id)
        console.log(teamData)
        res.json(teamData);
    } catch (error) {
        res.status(400).send("Error retreiving team data")
    }
};

exports.getAllTeams = async (req, res) => {
    try {
        const teamData = await knex('teams')
        .select('*')
        res.json(teamData);
    } catch (error) {
        res.status(400).send("Error retreiving all teams data")
    }
};

exports.createNewTeam = async (req, res) => {
    try {
        const newTeam = req.body;
        await knex('team_joiner').insert(newTeam)
        res.status(201).json(newTeam)
    } catch (error) {
        res.status(400).send("Error creating new team")
    }
};
