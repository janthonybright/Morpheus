module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        // Email: {
        //     type: DataTypes.STRING,
        // validate: {
        //     isEmail: true,
        //     notNull: true,
        // }
        // },
        username: {
           type: DataTypes.STRING,
           allowNull: false,
        validate: {
            len: [2,23],
        },
        },
        password:{
            type:  DataTypes.STRING,
            allowNull: false,
        validate: {
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