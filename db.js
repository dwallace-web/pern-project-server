const Sequelize = require('sequelize');
const user = require('./models/user');

const database = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

database.authenticate()
    .then(() => console.log('POSTGRES Connection confirmed! Database has been connected'))
    .catch(err=> console.log(err));


    const User = database.import ('./models/user')
    const Question = database.import('./models/question')
    const Answer = database.import('./models/answer')

    User.hasMany(Question)
    Question.belongsTo(User)

    Question.hasMany(Answer)
    Answer.belongsTo(Question)

    User.hasMany(Answer)
    Answer.belongsTo(User)

 
module.exports = database;