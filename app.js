require('dotenv').config();
const Express = require('express');
const app = Express();

//npm install --save-dev nodemon express dotenv pg sequelize jsonwebtoken bcryptjs


//2. setup the server in db.js
const database = require('./db');
//3. importing the database connection
// database.sync({force: true}); // to clear all tables on the local device ---> last resort

database.sync();

//1. launching server
app.use(Express.json());

app.use(require('./middleware/headers'));

app.use(Express.static(__dirname + '/public'));
console.log(__dirname);

app.get('/', (request, response) => response.render('index'));



//4. setup the user model

//5. setup the user controller

//6. import the user controller

const usercontroller = require('./controllers/usercontroller')
app.use('/user', usercontroller)


const questioncontroller = require('./controllers/questioncontroller')
app.use('question', questioncontroller)

//7. import middleware -> CORS headers and validate session

app.listen(process.env.PORT, () => console.log(`App on ${process.env.PORT}`));