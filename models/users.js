module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        Email: DataTypes.STRING,
        validate: {
            isEmail: true,
            notNull: true,
        },
        Username: DataTypes.STRING,
        validate: {
            is: ["^[a-z]+$",'i'],
            len: [2,23],
            notNull: true,
        },
        Password: DataTypes.STRING,
        validate: {
            notNull: true,
            len: [2,23], 
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