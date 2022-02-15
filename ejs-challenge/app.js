const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const _ = require("lodash")

const homeStartingContent = "Learning to code is a bit like going to the gym. Even if you max out and spent a whole weekend at the gym, you will not see a visible difference times when I picked it up then gave up, again and again. This is a common story amongst self-taught coders. Looking back, after teaching so many students ng back, after teaching so many students ut the problem is where do you find the time? Between working your full-time job, spending time with your"
const aboutContent = "But the problem is where do you find the time? Between working your full-time job, spending time with your family and life admin, when are you When I first started learning how to code, there were countless times when I picked it up then gave up, again and again. This is a common story amongst self-taught coders. Looking back, after teaching so many ng back, after teaching so many students ut the problem is where do you find the time? Between working your full-time job, spending time with your"
 
const contactContent = "When I first started learning how to code, there were countless times when I picked it up then gave up, again and again. This is a common story amongst self-taught coders. Looking back, after teaching so many students ut the problem is where do you find the time? Between working your full-time job, spending time with your family and life admin, when are you When I first started learning how to code ng back, after teaching so many students ut the problem is where do you find the time? Between working your full-time job, spending time with your"

let posts = []

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req,res) {
    res.render("home", {startingContent: homeStartingContent, newPost: posts })
    
})

app.get("/about", function(req,res) {
    res.render("about", {aboutContent: aboutContent})
})
app.get("/contact", function(req,res) {
    res.render("contact", {contactContent: contactContent})
})
app.get("/compose", function(req, res) {
    res.render("compose")
})
app.post("/compose", function(req, res) {
    const post = {
       title: req.body.postTitle,
       content: req.body.postBody
   }
   posts.push(post)
   res.redirect("/")
})

app.get("/posts/:postName", function(req, res) {
    const requestedTitle = _.lowerCase( req.params.postName)

    posts.forEach(element => {
        const storeTitle = _.lowerCase(element.title)
        if (requestedTitle === storeTitle) {
            res.render("post", {title: element.title, content: element.content })
        }
    });
})

app.listen(3000, function() {
    console.log("Server Started on port 3000")
})