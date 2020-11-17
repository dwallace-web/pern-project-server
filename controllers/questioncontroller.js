const router = require('express').Router();
const Question = require('../db').import('../models/question');



/* *********GET ALL QUESTIONS********* */

router.get("/", (req, res) => {
    Question.findAll()
    .then(questions => res.status(200).json(questions))
    .catch(err => res.status(500).json({ error: err}))
});

const validateSession = require('../middleware/validate-session');



/* *************QUESTION CREATE*************** */

router.post('/', validateSession, (req, res) => {
    

    const questionEntry = {
        title: req.body.question.title,
        category: req.body.question.category,
        entry: req.body.question.entry,
        owner: req.user.id,
    }
    Question.create(questionEntry)
        .then(question => res.status(200).json(question))
        .catch(err => res.status(500).json({ error: err }))
});

/* ***************EDIT QUESTIONS************** */

router.put("/:id", validateSession, function (req, res) {

    console.log(req.user); 

    const query = { where: { id: req.params.id, owner: req.user.id } };
    console.log('query---->', query);

    const updateQuestionEntry = {
        title: req.body.question.title,
        category: req.body.question.category,
        entry: req.body.question.entry,
    };
    
    

    Question.update(updateQuestionEntry, query)
        .then(questions => res.status(200).json({message: 'Question sucessfully edited'}))
        .catch((err) => res.status(500).json({ error: err }));
});


/* ***************DELETE QUESTIONS************** */

router.delete("/:entryId", validateSession, function (req, res) {
    
    const query = { where: { id: req.params.entryId, owner: req.user.id } };

    Question.destroy(query)
        .then(() => res.status(200).json({ message: "Question Entry Removed" }))
        .catch((err) => res.status(500).json({ error: err }));
});

/* **************GET QUESTIONS BY CATEGORY*************** */

router.get('/:category', function (req, res) {
    let category = req.params.category;

    Question.findAll({
        where: { category: category }
    })
        .then(questions => res.status(200).json(questions))
        .catch(err => resstatus(500).json({ error: err }))
});

/**EXTRA ENDPOINTS */



// /* **************GET QUESTIONS BY USER************** */

// router.get("/mine", validateSession, (req, res) => {
//     let userid = req.user.id
//     Question.fgrouindAll({
//         where: { owner: userid }
//     })
//     .then(questions => res.status(200).json(questions))
//     .catch(err => res.status(500).json({ error: err}))
// });

// /* ***************GET QUESTIONS BY TITLE************** */

// router.get('/:title', function (req, res) {
//     let title = req.params.title;

//     Question.findAll({
//         where: {title: title}
//     })
//     .then(questions => res.status(200).json(questions))
//     .catch(err => res.status(500).json({ error: err}))
// });

module.exports = router;
