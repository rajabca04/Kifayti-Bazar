const express = require("express")

const router = require("./routes/router")

const app = express()

app.use("/api",router)

require("./dbConnect")


app.listen(8000,()=>console.log("Server is Running at http://localhost:8000"))
