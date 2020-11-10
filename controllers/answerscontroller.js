const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

///////////create answer entry /////////////////////

router.post('/create', validateSession, (req, res) => {
    const answerEntry = {
        entry: req.body.entry,
        owner: req.user.id,
    }
    Answer.create(answerEntry)
        .then(answer => res.status(200).json(answer))
        .catch(err => res.status(500).json({ error: err }))
});

//////////





module.exports = router;