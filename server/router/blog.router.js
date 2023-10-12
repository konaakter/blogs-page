
const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const blogSchema = require("./schemas/blogSchema");
const blog = new mongoose.model("blog", blogSchema);

router.post('/', async (req, res) => {

    try {
        const newblog = new blog(req.body);
        await newblog.save();
        console.log(newblog)
        res.status(200).json({
            message: "Todo was inserted successfully!",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }

});

router.get("/", async (req, res) => {

    try {
        const data = await blog.find({});
        res.status(200).json({
            result: data,
            message: "Success",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
    

});


module.exports = router;