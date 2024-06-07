const express = require("express")
const router = express.Router();

router.get("/getStudent", (req, res) => {
    // req.query
    const EmployeeData = [
        {
            id: 1,
            firstName: 'Mark',
            lastName: 'David',
            age: 24
        },
        {
            id: 2,
            firstName: 'Virat',
            lastName: 'Kholi',
            age: 25
        },
        {
            id: 3,
            firstName: 'Rohit',
            lastName: 'Sharma',
            age: 30
        }
    ]
    res.json({ msg: "working",statusCode: 205, EmployeeData:EmployeeData })
})
router.post("/createStudent", (req, res) => {
    // req.body
    res.json({ msg: "working", status: 208 })
})

module.exports = router;
