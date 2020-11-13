const router = require('express').Router();
const Answer = require('../db').import('../models/answers');

//Get all answers //

router.get("/", (req, res) => {
  Answer.findAll()
  .then(questions => res.status(200).json(questions))
  .catch(err => res.status(500).json({ error: err}))
});

const validateSession = require('../middleware/validate-session');
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

//////////update/////////////////

router.put('/:id', validateSession, (req, res) => {
    answerEntry.update(req.body, {
      where: { id: req.params.id }
    })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err }))
  });


//////////delete//////////////

router.delete('/:id', validateSession, async (req, res) => {
    try {
      const result = await answerEntry.destroy({
        where: { id: req.params.id }
      });
  
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({error: err});
    }
  })

module.exports = router;