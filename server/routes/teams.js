const router = require('express').Router();
const teamsController = require('../controllers/teamsController');

router
    .route('/teams')
    .post(teamsController.addTeam);

router
    .route('/teams/:id')
    .get(teamsController.getOneTeam);

router
    .route('/enemyteams')
    .get(teamsController.GetComputerTeams);

router
    .route('/:user_id')
    .get(teamsController.getAllTeamsByUser);

router
    .route('/newteam')
    .post(teamsController.createNewTeam);



module.exports = router;