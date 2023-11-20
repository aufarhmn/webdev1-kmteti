const express = require('express');
const router = express.Router();

const { createNumber, 
        getNumbers, 
        updateNumber, 
        deleteNumber,
        registerUser 
    } = require('../controllers/index.js')

router.post('/create', createNumber);

router.get('/get', getNumbers);

router.put('/update', updateNumber);

router.delete('/delete', deleteNumber);

router.post('/register', registerUser);

module.exports = router;