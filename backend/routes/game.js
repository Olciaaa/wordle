const express = require('express')
const router = express.Router()

const currentWords = [];
const currentAnswers = [];
for(let i = 0; i < 6; i++) {
    currentWords.push("     ");
    currentAnswers.push("UUUUU");
}

router.post("/upload", (req, res) => {
    const { image } = req.files;
    
    if(!image) return res.send({status: "ERROR"});
         
    let imagepath = image.name.split(".");
    let newpath = `${__dirname}/../upload/${image.md5}.${imagepath[imagepath.length-1]}`;
    image.mv(newpath);

    console.log("New image:");
    console.log(newpath);

    /*TODO 
        Read words from API :)
    */
    currentWords.push("ANSWE");
    currentAnswers.push("CPPCW");

    return res.send({status: "OK"})
})

router.get("/retrieve", (req, res) => {
    res.send({words: currentWords, answers: currentAnswers})
})

module.exports = router