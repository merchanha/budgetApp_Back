const budget = require('../models/model')


//@desc Get budget
//@route Get /budget
exports.getBudget = async (req, res, next) => {
    try {
        const [budgets] = await budget.getBudget()
        return res.json(budgets)

    } catch (err) {
        return res.status(500).json({
            error: 'Server Error'
        });
    }
}

//@desc Add budget
//@route Post /budget
exports.addBudget = (req, res, next) => {
    res.send('Post budget')
}

//@desc delete budget
//@route delete /budget:id
exports.deleteBudget = (req, res, next) => {
    res.send('Delete budget')
}