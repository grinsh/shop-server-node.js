const {Router} = require("express");

const sentencesRouter = new Router();


sentencesRouter.get("/sayHello", (req, res) => {
    res.send("Hello to you!");
})

sentencesRouter.get("/sayHelloToSomeone/:fname/:lname", (req, res) => {
    console.log(req.params);
    const { fname, lname } = req.params;


    res.send("Hello to  " + fname + " " + lname);
})

sentencesRouter.get("/saySomthing", (req, res) => {
    console.log(req.query);
    const sentence = req.query.sentence;
    const name = req.query.name;
    res.send(name + " say: " + sentence);
})

module.exports = {sentencesRouter}
