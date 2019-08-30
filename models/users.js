module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        Email: {
            type: DataTypes.STRING,
        validate: {
            isEmail: true,
            notNull: true,
        }
        },
        Username: {
           type: DataTypes.STRING,
        validate: {
            
            len: [2,23],
            notNull: true,
        },
        },
        Password:{
            type:  DataTypes.STRING,
        validate: {
            notNull: true,
            len: [2,23], 
        }
        }
    },

    )
User.associate = function (model) {
    User.hasMany(model.Monster, {
        onDelete: "cascade"
    })
}
return User;
};