const express = require("express")

const app = express()

app.get("/", function(req, res) {
    // console.log(req);
    res.send("<h1>Hello World!</h1>")
})

app.get("/contact", function(req,res) {
    res.send("Contact me at: rvgujar14@gmail.com")
})
app.get("/about", function(req,res) {
    res.send("Hello, my name is Rita Gujar and I'm a B-Tech student and fullStack Developer. ")
})
app.get("/hobbies", function(req,res) {
    res.send("<ul><li>Coffee</li><li>Code</li><li>Dansing</li></ul>")
})

app.listen(3000, function() {
    console.log("Server Started on port 3000");
})