const express = require('express');
const router = express.Router();
const { getUser, getAllUser, updateUser, deleteUser } = require('../controllers/user');

router.get('/', getAllUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
