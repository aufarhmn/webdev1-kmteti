let numbers = [];

exports.createNumber = (req, res) => {
    const { num } = req.body;

    if (typeof num !== 'number') {
        return res.status(400).json({ 
            error: 'Invalid input. Number is required.' 
        });
    }

    numbers.push(num);

    res.status(201).json({ 
        numbers 
    });
};

exports.getNumbers = (req, res) => {
    res.status(200).json({ 
        numbers 
    });
};

exports.deleteNumber = (req, res) => {
    const { num } = req.body;

    if (typeof num !== 'number') {
        return res.status(400).json({ 
            error: 'Invalid input. Number is required.' 
        });
    }

    numbers = numbers.filter((n) => n !== num);
    res.status(200).json({ 
        numbers 
    });
};

exports.updateNumber = (req, res) => {
    const { num, newNum } = req.body;

    if (typeof num !== 'number' || typeof newNum !== 'number') {
        return res.status(400).json({ 
            error: 'Invalid input. Number and New Number are required.' 
        });
    }

    const index = numbers.indexOf(num);
    if (index === -1) {
        return res.status(404).json({ 
            error: 'Number not found.' 
        });
    }

    numbers[index] = newNum;
    res.status(200).json({ 
        numbers 
    });
};
