var express = require('express');
var router = express.Router();

const UserController = require('../controllers/user.controller');
const Authorization = require('../middlewares/authorization.middleware');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.get('/getSession', UserController.getSession);
router.get('/checkSession', UserController.checkSession);
router.get('/checkToken', UserController.checkToken);

router.get('/testAuth', Authorization.validateToken, Authorization.validUser, UserController.testAuth);



module.exports = router;
