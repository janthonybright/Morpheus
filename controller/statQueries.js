const db = require("../models")

module.exports = {
    createStat: function(stat, cb){
        db.Stat.create(stat).then(function(resp, err){
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
    },


    updateMonster: function(id, colName, info, cb){
        db.Stat.update({
            [colName]: info
        }, {
            where: {
                id: id
            }
        }).then(function(resp, err){
            if(err) throw err;
            cb(resp)
        })
    }




};