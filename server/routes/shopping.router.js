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

module.exports = router;