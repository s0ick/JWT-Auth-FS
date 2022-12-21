const Router = require('express').Router;

const UserController = require('../controllers/user-controller');

const router = new Router();


router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

router.get('/activate/:link', UserController.activateLink);
router.get('/refresh', UserController.refreshToken);
router.get('/users', UserController.getUsers);

module.exports = router;
