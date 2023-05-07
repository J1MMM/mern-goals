const express = require('express');
const router = express.Router();

const {getGoals, addGoal, editGoal, deleteGoal} = require('../controllers/goalsController')

router.route('/')
	.get(getGoals)
	.post(addGoal)
	.put(editGoal)
	.delete(deleteGoal)


module.exports = router;