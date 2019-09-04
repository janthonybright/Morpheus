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
        validate: {
            len: [2,23],
            notNull: true,
        },
        },
        password:{
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