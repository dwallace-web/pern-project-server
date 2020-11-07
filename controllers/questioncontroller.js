const router = require('express').Router();
const Question = require('../db').import('../models/question');

const validateSession = require('../middleware/validate-session');

/* *************QUESTION CREATE*************** */

router.post('/create', validateSession, (req, res) => {
    const questionEntry = {
        title: req.body.question.title,
        date: req.body.question.date,
        entry: req.body.question.entry,
        owner: req.user.id,
    }
    Question.create(questionEntry)
        .then(question => res.status(200).json(question))
        .catch(err => res.status(500).json({ error: err }))
});

/* *********GET ALL ENTRIES********* */

router.get("/", (req, res) => {
    Question.findAll()
        .then(questions => res.status(200).json(questions))
        .catch(err => res.status(500).json({ error: err }))
});


/* **************GET ENTRIES BY USER************** */

router.get("/mine", validateSession, (req, res) => {
    let userid = req.user.id
    Question.findAll({
        where: { owner: userid }
    })
        .then(questions => res.status(200).json(questions))
        .catch(err => res.status(500).json({ error: err }))
});

/* ***************GET ENTRIES BY TITLE************** */

router.get('/:title', function (req, res) {
    let title = req.params.title;

    Question.findAll({
        where: { title: title }
    })
        .then(questions => res.status(200).json(questions))
        .catch(err => res.status(500).json({ error: err }))
});

router.put("/update/:entryId", validateSession, function (req, res) {
    const updateQuestionEntry = {
        title: req.body.question.title,
        date: req.body.question.date,
        entry: req.body.question.entry,
    };

    const query = { where: { id: req.params.entryId, owner: req.user.id } };

    Question.update(updateQuestionEntry, query)
        .then((questions) => res.status(200).json(questions))
        .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner: req.user.id } };
    Question.destroy(query)
        .then(() => res.status(200).json({ message: "Question Entry Removed" }))
        .catch((err) => res.status(500).json({ error: err }));
});


module.exports = router;