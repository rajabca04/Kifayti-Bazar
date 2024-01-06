const maincategoryRouter = require("express").Router()
const {getRecord} = require("../controllers/MaincategoryController")

maincategoryRouter.get("/",getRecord)

module.exports = maincategoryRouter
