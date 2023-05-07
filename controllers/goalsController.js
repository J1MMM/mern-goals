const asyncHandler = require('express-async-handler');



const getGoals = asyncHandler(async(req, res)=>{
	res.status(200).json({message: 'successs'})
})

const addGoal = asyncHandler(async(req, res)=>{
	res.status(201).json({message: 'goal created'})
})

const editGoal = asyncHandler(async(req, res)=>{
	const {id} = req.body;

	res.status(201).json({message: `goal ${id} updated`})
})

const deleteGoal = asyncHandler(async(req, res)=>{
	const {id} = req.body;

	if(!id){
		return res.status(400).json({message: 'ID are required'})
	}

	res.status(200).json({message: `goal with id of ${id} deleted`})
})



module.exports = { getGoals, addGoal, editGoal, deleteGoal }