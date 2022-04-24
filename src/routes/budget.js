const express = require('express');
const router = express.Router();
const {getBudget, addBudget, deleteBudget} = require('../controllers/Controllers')

router.get('/', getBudget)
router.route('/:id').delete(deleteBudget)

module.exports = router 