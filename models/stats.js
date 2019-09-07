module.exports = function(sequelize, Datatypes) {
    const Stat = sequelize.define("Stat", {
        HealthPoint: {
            type: Datatypes.INTEGER
        },
        AttPoint: {
            type: Datatypes.INTEGER
        },
        DefPoint: {
            type: Datatypes.INTEGER
        },
    });  

    // Stat.associate = function (model) {
    // Stat.belongsTo(model.Monster, {
    // foreignKey: {
    //     allowNull: false
    //     //foreignKey non accpeted when set false 
    //   }
    // })
    // }

    return Stat; 
};