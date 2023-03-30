//const router = require('express').Router();
import { router } from 'express';

import { register, logIn } from '../controllers/auth';

//register route
router.post('/register', register);
router.post('/logIn', logIn);

export default router;
