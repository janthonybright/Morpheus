const db = require("../models") 

module.exports = {
    createMonster: function(monster, cb){
        db.Monster.create(monster).then((resp, err) => {
            console.log(resp)
            if(err) throw err;
            cb(resp)
        })
    },



    getMonster: function(id,cb){
        db.Monster.findOne({
            where: {
            UserId: id
            },
            include: [db.Stat]
        }).then(function(resp, err){
            if(err) throw err;
            cb(resp)
        })
    }

    



}; 