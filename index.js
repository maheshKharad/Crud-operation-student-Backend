const express = require("express")
const cors = require('cors')
const student = require('./routes/student')
const teacher = require('./routes/teacher')
const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())

app.use('/student',student)
app.use('/teacher', teacher)

app.listen(PORT, ()=>{
    console.log("server started", PORT)
})