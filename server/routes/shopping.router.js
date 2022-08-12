const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM "shoppingList" ORDER BY "name"`
    pool.query(sqlQuery)
        .then( result => {
            console.log('data from DB', result.rows);
            res.send(result.rows);
        }).catch(err => {
            console.log('server GET', err);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO "shoppingList" (name, quantity, unit)
                    VALUES ($1, $2, $3)`;

    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added item to the database`, result);
            res.sendStatus(201);
        })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})





module.exports = router;