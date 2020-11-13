// const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const answer = sequelize.define('answer', {
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return answer;
}