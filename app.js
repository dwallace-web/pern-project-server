require('dotenv').config();
const Express = require('express');
const app = Express();

//npm install --save-dev nodemon express dotenv pg sequelize jsonwebtoken bcryptjs

const database = require('./db');
// database.sync({force: true}); // to clear all tables on the local device ---> last resort

database.sync();

app.use(Express.json());
app.use(require('./middleware/headers'));
app.use(Express.static(__dirname + '/public'));

app.get('/', (request, response) => response.render('index'));

const usercontroller = require('./controllers/userController')
app.use('/user', usercontroller)

const questioncontroller = require('./controllers/questionController')
app.use('/question', questioncontroller)

const answercontroller = require('./controllers/answerController')
app.use('/answer', answercontroller)

//7. import middleware -> CORS headers and validate session


app.listen(process.env.PORT, () => console.log(`App is listening on the Port number: ${process.env.PORT}`));