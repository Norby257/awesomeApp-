var router = require("express").Router();
var productController = require("../controllers/productController");

router.get("/:id", productController.find)

router.post("/new", productController.create);

//  now make it avail for other parts of app 
module.exports = router;