const router = require('express').Router();
const { register } = require('../controllers/auth');

//register route
router.post('/register', register);

export default router;
