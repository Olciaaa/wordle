const express = require('express')
const router = express.Router()

router.post("/upload", (req, res) => {
    const { image } = req.files;
    
    if(!image) return res.send({status: "ERROR"});
         
    let imagepath = image.name.split(".");
    image.mv(__dirname + "/../upload/" + image.md5 + "." + imagepath[imagepath.length-1]);

    return res.send({status: "OK"})
})

module.exports = router