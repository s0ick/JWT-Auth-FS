const Router = require('express').Router;
const {body} = require('express-validator');

const UserController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const router = new Router();


router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({min: 4, max: 32}),
  UserController.registration
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

router.get('/activate/:link', UserController.activateLink);
router.get('/refresh', UserController.refreshToken);
router.get('/users', authMiddleware, UserController.getUsers);

module.exports = router;
