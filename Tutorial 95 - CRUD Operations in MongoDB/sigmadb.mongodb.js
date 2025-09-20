// Create a new database.
use("sigmadb");


// Create a new collection.
db.createCollection("courses");


console.log(db)


// CREATE
db.courses.insertOne({
    name: "Java",
    price: 2000
});

db.courses.insertMany([
    {
        name: "CSS",
        price: 2000
    },
    {
        name: "HTML",
        price: 2000
    },
    {
        name: "JS",
        price: 2000
    },
    {
        name: "React",
        price: 2000
    },
    {
        name: "Next",
        price: 2000
    }
])


// READ
let a = db.courses.find({name: "Java"});
console.log(a);
console.log(a.count());
console.log(a.toArray());

let b = db.courses.findOne({name: "Java"});
console.log(b);


// UPDATE
db.courses.updateOne({price: 2000}, {$set:{price: 0}})

db.courses.updateMany({price: 2000}, {$set:{price: 1000}})


// DELETE
db.courses.deleteOne({price: 1000})

db.courses.deleteMany({price: 1000})