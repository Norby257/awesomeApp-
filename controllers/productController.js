var db = require("../models");
//  we only need models folder since we have the index file 
module.exports = {
    find: function (req, res) {
        //  get all info from the DB 
        //  using mongoose db.collectionName.action 
        //  using findOne bc we are using id 
        db.Product.findOne({_id: req.params.id})
    }
}