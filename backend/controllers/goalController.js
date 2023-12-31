const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals'})
})

// @desc    Post Goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field!')
    }


    res.status(200).json({ message: 'Set Goal'})
})

// @desc    Update Goals
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdANDUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @desc    Delete Goals
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Remove goal ${req.params.id}` })
}) 


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}