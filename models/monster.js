module.exports = function(sequelize, DataTypes) {
  const Monster = sequelize.define("Monster", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        is: ["^[a-z]+$",'i'],
        len: [2, 50]
      }
    },
    color: {
    type: DataTypes.STRING,
    allowNull: false
    },
    element: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Monster.associate = function (model) {
    Monster.belongsTo(model.User, {
      foreignKey: {
        allowNull: false
      }
    })
  Monster.hasMany(model.Stats, {
    onDelete: "cascade"
  })
  };
  return Monster;
};
