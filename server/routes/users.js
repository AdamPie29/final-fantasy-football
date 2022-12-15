const router=require('express').Router();
const usersController = require('../controllers/usersController');
const authorize = require("../middleware/authorize");

router
    .route('/signup')
    .post(usersController.register);

router
    .route('/login')
    .post(usersController.login);

router
    .route('/currentUser')
    .get(authorize, usersController.approve);



module.exports = router;
