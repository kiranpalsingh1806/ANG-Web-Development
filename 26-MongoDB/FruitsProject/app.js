const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please check your data entry, no name specified!!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 7,
    review: "Peach is yummy!!"
});

fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best Fruit"
// })

// const orange = new Fruit({
//     name: "Orange",
//     score: 9,
//     review: "Great in summer"
// })

// const banana = new Fruit({
//     name: "Banana",
//     score: 10,
//     review: "Great fruit again !!!"
// })

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err)
    } else {

        mongoose.connection.close();

        console.log(fruits);
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({})