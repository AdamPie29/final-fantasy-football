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

exports.getAllTeams = async (req, res) => {
    console.log(req.params)
    try {
        const teamData = await knex('team_joiner')
        .where('user_id', req.params.user_id)
        .select('*')
        res.json(teamData);
    } catch (error) {
        res.status(400).send("Error retreiving all teams made by user")
    }
};

// Get all teams made by one user

exports.getAllTeamsByUser = async (req, res) => {
    try {
        const teamData = await knex('team_joiner')
        .where('user_id', req.params.user_id)
        .select('*')
        const teamIdsWithObject = [...new Map(teamData.map((member)=> [member.TeamId, member])).values()]
        const teamIds = []
        for (let i=0; i < teamIdsWithObject.length; i++) {
            teamIds.push(teamIdsWithObject[i].TeamId)
        }
        const teamArray = teamIds.map(id => {
            return teamData.filter((element)=> {
                return element.TeamId == id
            })
        })
        res.json(teamArray)
    } catch (error) {
        res.status(400).send("Error retreiving aaron teams")
    }
};