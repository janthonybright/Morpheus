const db = require("../models")

module.exports = {
    createUser: function(User, cb){
        db.User.create(User).then(function(resp){
            console.log(resp)
            if(err) throw err;
            cb(resp)
        })
    },

    getUser: function(id, cb){
        db.User.findAll({
            where: {
                userId: id
            },
            include: [db.User]
        }).then(function(resp){
            console.log(resp)
            if(err) throw err;
            cb(resp)
        })
    }

};