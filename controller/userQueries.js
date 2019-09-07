const db = require("../models")

module.exports = {
    createUser: function(User, cb){
        db.User.create(User).then(function(resp, err){
            console.log(resp)
            if(err) throw err;
            cb(resp)
        })
    },

    getUser: function(id, cb){
        db.User.findOne({
            where: {
                id: id
            },
            include: [db.Monster]
        }).then(function(resp, err){
           console.log(resp)
            if(err) throw err;
            cb(resp)
        })
    }

};