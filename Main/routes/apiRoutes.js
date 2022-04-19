const router = require('express').Router();

router.get('/notes', (req, res) => {
        return res.json(notes);
    })
})