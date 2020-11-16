module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
            

        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // owner: {

        //     type: DataTypes.INTEGER,
        //     // allowNull: false

        // }
       
    });
    // const User = sequelize.define('user', {
    //     username: {
    //         type: DataTypes.STRING,
    //         allowNull: true,
    //         unique: true
    //     },
    //     password: {
    //         type: DataTypes.STRING,
    //         allowNull: true
    //     },
    // });
    // Question.belongsTo(User, {foreignKey: 'fk_userid', targetKey: 'id'});
    
    return Question
};