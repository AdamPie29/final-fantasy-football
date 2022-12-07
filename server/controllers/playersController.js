const knex = require('knex')(require('../knexfile'));
require('dotenv').config();
const {uuid} = require('uuidv4');

// Get All Players

exports.getAll = async (req, res) => {
    try {
        const playerData = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        res.json(playerData);
    } catch (error) {
        res.status(400).send("Error retrieving player data")
    }
};

// Get Player By ID

exports.getById = async (req, res) => {
    try {
        const playerId = req.params.playerId;
        const playerData = await knex
        .select('*')
        .from('players_statistics')
        .where('PlayerID', playerId)
        res.json(playerData[0]);
    } catch (error) {
        res.status(400).send("Error player not found")
    }
};

// Sort Players By Last Name

exports.sortByPlayerNameASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_images.LastName', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByPlayerNameDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_images.LastName', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Fantasy Points

exports.sortByFanPointsASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.FantasyPointsFanDuel', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByFanPointsDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.FantasyPointsFanDuel', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Passing Yards

exports.sortByPassingYardsASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.PassingYards', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByPassingYardsDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.PassingYards', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Passing Touchdowns

exports.sortByPassingTDsASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.PassingTouchdowns', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByPassingTDsDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.PassingTouchdowns', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Interceptions

exports.sortByINTsASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.PassingInterceptions', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByINTsDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.PassingInterceptions', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Rushing Yards

exports.sortByRushingYardsASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.RushingYards', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByRushingYardsDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.RushingYards', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Rushing Touchdowns

exports.sortByRushingTDsASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.RushingTouchdowns', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByRushingTDsDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.RushingTouchdowns', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Receiving Yards

exports.sortByReceivingYardsASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.ReceivingYards', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByReceivingYardsDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.ReceivingYards', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Receiving Touchdowns

exports.sortByReceivingTDsASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.ReceivingTouchdowns', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByReceivingTDsDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.ReceivingTouchdowns', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

// Sort Players By Fumbles

exports.sortByFumblesASC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.Fumbles', 'asc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};

exports.sortByFumblesDESC = async (req, res) => {
    try {
        const data = await knex('players_statistics')
        .join ('players_images', 'players_statistics.PlayerID', '=', 'players_images.PlayerID')
        .select ('players_statistics.PlayerID', 'players_statistics.Team', 'players_statistics.Position', 'players_statistics.PassingYards', 'players_statistics.PassingTouchdowns', 'players_statistics.PassingInterceptions', 'players_statistics.RushingYards', 'players_statistics.RushingTouchdowns', 'players_statistics.ReceivingYards', 'players_statistics.ReceivingTouchdowns', 'players_statistics.Fumbles', 'players_statistics.FantasyPointsFanDuel', 'players_images.FirstName', 'players_images.LastName', 'players_images.PhotoUrl')
        .orderBy ('players_statistics.Fumbles', 'desc')
        res.json(data)
    } catch {
        res.status(400).send("Error sorting data")
    }
};