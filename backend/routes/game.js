const express = require('express')
const router = express.Router()

const currentWords = [];
const currentAnswers = [];
const wordOfDay = process.argv[2].toUpperCase();

for(let i = 0; i < 6; i++) {
    currentWords.push("     ");
    currentAnswers.push("UUUUU");
}

let currentLine = 0;

//MOCK START
const generateString = () => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let randomString = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return randomString;
}

const mock = (path) => {
    /*TODO 
        Read words from API :)
    */
    return new Promise((resolve, reject) => {
        resolve(generateString())
    })
}

//MOCK END

router.post("/upload", (req, res) => {
    const { image } = req.files;
    
    if(!image) return res.send({status: "ERROR"});
         
    let imagepath = image.name.split(".");
    let newpath = `${__dirname}/../upload/${image.md5}.${imagepath[imagepath.length-1]}`;
    image.mv(newpath);

    console.log("New image:");
    console.log(newpath);

    mock(newpath).then((word) => {
        let answer = "WWWWW".split("");
        for(let i = 0; i < 5; i++) {
            if(wordOfDay[i] == word[i]) {
                answer[i] = "C";
            } else if(wordOfDay.includes(word[i])) {
                answer[i] = "P";
            }
        }

        currentWords[currentLine] = word;
        currentAnswers[currentLine] = answer.join("");
        currentLine += 1;
    })

    return res.send({status: "OK"})
})

router.get("/retrieve", (req, res) => {
    res.send({words: currentWords, answers: currentAnswers})
})

router.get("/reset", (req, res) => {
    for(let i = 0; i < 6; i++) {
        currentWords.unshift("     ");
        currentWords.pop();
        currentAnswers.unshift("UUUUU");
        currentAnswers.pop();
        currentLine = 0;
    }
    res.send({status: "OK"})
})

module.exports = router