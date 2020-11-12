const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define('likes', {
        isLike: {
            type: DataTypes.BOOLEAN, 
            allowNull: true,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        
        
    }),
    
  Answer  = this.sequelize.define('company', {/* attributes */});

Likes.belongsTo(Answer, {foreignKey: 'fk_answerId', targetKey: 'id'}); // Adds fk_companyname to User
}