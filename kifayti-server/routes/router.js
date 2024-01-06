const router = require("express").Router()

const maincategoryRouter = require("./MaincategoryRouter")

router.use("/maincategory",maincategoryRouter)

module.exports = router