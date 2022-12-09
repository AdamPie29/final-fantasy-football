const router = require('express').Router();
const teamsController = require('../controllers/teamsController');

router
    .route('/teams')
    .post(teamsController.addTeam);

router
    .route('/teams/:id')
    .get(teamsController.getOneTeam);

router
    .route('/allteams')
    .get(teamsController.getAllTeams);

module.exports = router;