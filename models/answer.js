module.exports = (sequelize, DataTypes) => {
    const Answer = this.sequelize.define('answer', {
       entry: {
           type: DataTypes.STRING,
           allowNull: false
        },
    });
    const Question = sequelize.define('question', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        }
        
    });
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });
    Question.belongsTo(User, {foreignKey: 'fk_userid', targetKey: 'id'});
    Answer.belongsTo(Question, {foreignKey: 'fk_questionid', targetKey: 'id'});
    return Answer
};