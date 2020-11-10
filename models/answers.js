module.exports = (sequelize, DataTypes) => {
    const answers = sequelize.define('answers', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
       
    });

    return answers;
}