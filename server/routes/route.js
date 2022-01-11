const express = require('express');

const router = express.Router();

const CalcModel = require('../models/calc');

router.post('/fibcalc', (req, res) => {
    const data = req.body;

    const calc = new CalcModel(data);
    console.log("Save works right");
    calc.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Database error' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved'
        });
    });
})

router.get('/fibcalc', (req, res) => {
    CalcModel.find({  })
        .then((data) => {
            res.json(data); 
        })
        .catch((error) => {
            //console.log('error: ', daerrorta);
        });
});


module.exports = router;