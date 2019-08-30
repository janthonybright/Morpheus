const db = require("../models") 

module.exports = {
    createMonster: function(monster, cb){
        db.Monster.create(monster).then(resp => {
            console.log(resp)
            if(err) throw err;
            cb(resp)
        })
    },

    getUsersMonster: function(id, cb) {
        db.Monster.findAll({
            where: {
                UserId: id
            },
            include: [db.Stat]
        }).then(resp => {
            console.log(resp) 
            if(err) throw err;
            cb(resp)
        })
    }
}; 