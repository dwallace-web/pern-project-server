const router = require('express').Router();
const User = require('../db').import('../models/user');
const Answer = require('../db').import('../models/answer');
const validateSession = require('../middleware/validate-session')
const Question = require('../db').import('../models/question')



///////////create answer entry /////////////////////

router.post('/create', validateSession, (req, res) => {
    const answerEntry = {
        title: req.body.answer.title,
        entry: req.body.answer.entry,
        likes: req.body.answer.likes,
        userId: req.user.id,
        questionId: req.body.answer.questionId
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