const router = require('express').Router();
const { register, logIn } = require('../controllers/auth');

//register route
router.post('/register', register);
router.post('/logIn', logIn);

//module.exports = router;
module.exports = router;
