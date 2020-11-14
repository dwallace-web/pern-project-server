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
<<<<<<< HEAD
    
=======
>>>>>>> 9e7054ab709e27003a09f11e19f109bb9da642a8
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