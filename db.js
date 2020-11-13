const Sequelize = require('sequelize');

const database = new Sequelize('pern-project-server', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

database.authenticate()
    .then(() => console.log('POSTGRES Connection confirmed! Database has been connected'))
    .catch(err=> console.log(err));
 
module.exports = database;