const db = require("../models")

module.exports = {
    createStat: function(stat, cb){
        db.Stat.create(stat).then(function(resp){
            console.log(resp)
            if(err) throw err;
            cb(resp)
        })
    },

    getStat: function(id, cb) {
        db.Stat.findAll({
            where: {
                UserId: id
            }
            
        }).then(function (resp){
            console.log(resp)
            if(err) throw err;
            cb(resp)
        })
    }
};