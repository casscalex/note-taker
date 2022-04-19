const router = require('express').Router();
let db = require('../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
 let results = db;
 res.json(results);
});

router.post('/notes', (req,res) =>  {
    res.json(db)
})

router.delete('/notes', (req, res) => {

})

fs.writeFile('./db/db.json', JSON.stringify(db), (err) =>
err ? console.error(err) : console.log('notes has been written'));

module.exports = router;