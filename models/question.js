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
    
        }
       
    });
    // const UserId = this.sequelize.define('UserId', {
    //     type:DataTypes.INTEGER,
        
    // });
    // Question.belongsTo(UserId, {foreignKey: 'fk_UserId', tagetKey: 'id'});
    return Question
};