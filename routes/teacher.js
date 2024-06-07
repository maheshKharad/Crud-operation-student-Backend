const express = require("express")
const router = express.Router();

router.get("/getStudent", (req, res) => {
    // req.query

    res.json({ msg: "working" })
})
router.post("/createStudent", (req, res) => {
    // req.body
    res.json({ msg: "working", status: 208 })
})

module.exports = router;
