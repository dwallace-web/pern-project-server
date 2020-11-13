module.exports = (sequelize, DataTypes) => {
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

    Question.associate = models => {
        Question.hasMany(models.answers)
    }

    return Question
};