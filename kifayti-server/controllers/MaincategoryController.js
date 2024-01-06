async function getRecord(req,res){
    res.send("Hello From Server")
}

module.exports = {
    getRecord:getRecord,
}