const express = require ("express")
const https = require("https")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    // console.log(req.body.cityName);

    // console.log("Post Request Recieved");

    const query = req.body.cityName
    const apiKey = "770cd8ed524c9e764e9d951a33d84ae7"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            // console.log(weatherData);

            const temp = weatherData.main.temp
            // console.log(temp);

            const weatherDiscription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon

            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<p>The weather is currently " + weatherDiscription + "</p>")
            res.write("<h2>The Tempreture in " + query + " is " + temp + " degree Celcius</h2>")
            res.write("<img src=" + imageURL + ">")
            res.send()

            // console.log(weatherDiscription);
        })
    })

})


app.listen(3000, function() {
    console.log("Server is running on port 3000");
})