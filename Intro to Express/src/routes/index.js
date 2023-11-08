const express = require('express');
const router = express.Router();

const { createNumber,
        getNumbers,
        deleteNumber,
        updateNumber } = require('../controllers/index.js');

router.post('/create', createNumber);

router.get('/get', getNumbers);

router.delete('/delete', deleteNumber);

router.put('/update', updateNumber);

module.exports = router;