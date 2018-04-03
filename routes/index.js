var router = require("express").Router();
var productRouter = require("./apiRoutes")
var htmlRouter = require("./htmlRoutes");
//  separate data from views 
//  import both routes folder 
router.use("/api/products", productRouter);
router.use("/", htmlRouter);
module.exports = router;