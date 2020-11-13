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
<<<<<<< HEAD
    });

    Question.associate = models => {
        Question.hasMany(models.answers)
    }

=======
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
    
>>>>>>> d63bfd66cc389f4bdf72c2a0a2892f1694a4beb5
    return Question
};