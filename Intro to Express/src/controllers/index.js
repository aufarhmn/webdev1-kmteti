const User = require('../models/User.js');

let numbers = [];

// CRUD -> CREATE, READ, UPDATE, DELETE
exports.createNumber = (req, res) => {
    const { num } = req.body

    if(typeof num !== 'number'){
        return res.status(400).json({
            error: "Invalid Input!"
        })
    }

    numbers.push(num);

    res.status(200).json({
        numbers
    })
}

exports.getNumbers = (req,res) => {
    res.status(200).json({
        numbers
    })
}

exports.updateNumber = (req,res) => {
    const { num, newNum } = req.body

    if (typeof num !== 'number' || typeof newNum !== 'number'){
        return res.status(400).json({
            error: "Invalid Input"
        })
    }

    const index = numbers.indexOf(num)
    if (index === -1){
        return res.status(404).json({
            error: "Number not found"
        })
    }


    numbers[index] = newNum;
    res.status(200).json({
        numbers
    })
}

exports.deleteNumber = (req, res) => {
    const { num } = req.body

    if(typeof num !== 'number'){
        return res.staus(400).json({
            error: "Invalid Input"
        })
    }

    numbers = numbers.filter((n) => n !== num)
    res.status(200).json({
        numbers
    })
}

exports.registerUser = (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password
    });

    newUser
        .save()
        .then((user) => {
            res.status(200).json({
                user
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
};

// CREATE