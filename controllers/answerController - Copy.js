const router = require('express').Router();
const User = require('../db').import('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const Answer = require('../db').import('../models/answer');



//View Answers by question
router.get('/answers/:questionId', function (req, res) {
  
  // let questionId =  req.body.answer.answerId ;
  
  Answer.findAll({
      where: { questionId: req.params.questionId }
  })
      .then(questions => res.status(200).json(questions))
      .catch(err => res.status(500).json({ error: err }))
});

const validateSession = require('../middleware/validate-session');

///////////create answer entry /////////////////////

router.post('/', validateSession, (req, res) => {
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

router.put('/update/:id', validateSession, (req, res) => {
    const updateanswerEntry ={
      title: req.body.answer.title,
      entry: req.body.answer.entry,
      likes: req.body.answer.likes,
      userId: req.user.id,
      questionId: req.body.answer.questionId
    }
    
    const query = {where: {id: req.params.id}};

    Answer.update(updateanswerEntry, query)
    
    
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err }))
  });


//////////delete//////////////

router.delete('/delete/:id', validateSession, function (req, res)  {
    const query = {where: { id: req.params.id}};

    Answer.destroy(query)
      .then(() => res.status(200).json({message: "Answer entry removed"}))
      .catch((err) => res.status(500).json({error: err}));
  
});
  
  
  
  //   try {
  //     const result = await answerEntry.destroy({
  //       where: { id: req.params.id }
  //     });
  
  //     res.status(200).json(result);
  //   } catch (err) {
  //     res.status(500).json({error: err});
  //   }
  // })

module.exports = router;