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
};