const express = require('express');
const router = express.Router();
const db = require('../database/db')


router.get('/', (req, res)=>{
    const getBudget = "SELECT * FROM budget";
    db.query(getBudget, (err, result)=>{
        res.send(result)
    })

})

router.post('/', (req, res)=>{
    const amount = req.body.amount
    const date= req.body.date
    const description = req.body.description
    const id = req.body.id
    const type = req.body.type

    const postBudget = 'INSERT INTO budget (amount, date, description, id, type) VALUES (?,?,?,?,?)'
    db.query(postBudget, [amount, date, description, id, type], (err, result)=>{
        console.log(result)
    })
})
//router.route('/:id').delete(deleteBudget)

module.exports = router 