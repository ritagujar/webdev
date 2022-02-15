const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true }, { useNewUrlParser: true })

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})

const Fruit = mongoose.model("Fruit", fruitSchema)
const Person = mongoose.model("Person", personSchema)

const mango = new Fruit ({
    name: "Mango",
    score: 6,
    review: "Decent Fruit"
})

mango.save()

const fruit = new Fruit ({
    rating: 10,
    review: "Peaches are so yummy!"
})

Person.updateOne({name: "John"}, {favouriteFruit: mango}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("successfully updated the document")
    }
})

// const person = new Person ({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// })

//fruit.save()
//person.save()


// const kiwi = new Fruit ({
//     name: "Kiwi",
//     score: 4,
//     review: "The best fruit"
// })

// const orange = new Fruit ({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// })

// const banana = new Fruit ({
//     name: "Banana",
//     score: 3,
//     review: "Weird texture" 
// })


// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err){
//         console.log(err)
//     } else {
//         console.log("succesfully saved all the fruits to fruitsDB")
//     }
// })

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err)
    } else {

        mongoose.connection.close()

        fruits.forEach(function (fruit) {
            console.log(fruit.name)
        })
    }
})

// Fruit.updateOne({_id: "602be3f46c714915647bb868"}, {name: "Peach"}, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully updated the document.")
//     }
// }) 


// Fruit.deleteOne({name: "Peach"}, function(err) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("Successfully Deleted a document")
//     }
// })