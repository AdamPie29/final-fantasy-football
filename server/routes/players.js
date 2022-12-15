const router = require('express').Router();
const playersController = require('../controllers/playersController');

router
    .route('/')
    .get(playersController.getAll);

router
    .route('/playerID')
    .get(playersController.getById);

router
    .route('/sortByPlayerNameASC')
    .get(playersController.sortByPlayerNameASC);

router
    .route('/sortByPlayerNameDESC')
    .get(playersController.sortByPlayerNameDESC)

router
    .route('/sortByFanPointsASC')
    .get(playersController.sortByFanPointsASC);

router
    .route('/sortByFanPointsDESC')
    .get(playersController.sortByFanPointsDESC);

router
    .route('/sortByPassingYardsASC')
    .get(playersController.sortByPassingYardsASC);

router
    .route('/sortByPassingYardsDESC')
    .get(playersController.sortByPassingYardsDESC);

router
    .route('/sortByPassingTDsASC')
    .get(playersController.sortByPassingTDsASC);

router
    .route('/sortByPassingTDsDESC')
    .get(playersController.sortByPassingTDsDESC);

router
    .route('/sortByINTsASC')
    .get(playersController.sortByINTsASC);

router
    .route('/sortByINTsDESC')
    .get(playersController.sortByINTsDESC);

router
    .route('/sortByRushingYardsASC')
    .get(playersController.sortByRushingYardsASC);

router
    .route('/sortByRushingYardsDESC')
    .get(playersController.sortByRushingYardsDESC);

router
    .route('/sortByRushingTDsASC')
    .get(playersController.sortByRushingTDsASC);

router
    .route('/sortByRushingTDsDESC')
    .get(playersController.sortByRushingTDsDESC);

router
    .route('/sortByReceivingYardsASC')
    .get(playersController.sortByReceivingYardsASC);

router
    .route('/sortByReceivingYardsDESC')
    .get(playersController.sortByReceivingYardsDESC);

router
    .route('/sortByReceivingTDsASC')
    .get(playersController.sortByReceivingTDsASC);

router
    .route('/sortByReceivingTDsDESC')
    .get(playersController.sortByReceivingTDsDESC);

router
    .route('/sortByFumblesASC')
    .get(playersController.sortByFumblesASC);

router
    .route('/sortByFumblesDESC')
    .get(playersController.sortByFumblesDESC);

module.exports = router;
