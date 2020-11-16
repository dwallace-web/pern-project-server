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
    
    return Question
};