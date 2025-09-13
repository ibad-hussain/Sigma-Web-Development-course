const express = require('express')
const app = express()
const port = 3000



// Request chaining

// Middleware 1
const middleware1 = (req, res, next) => {
    console.log("Middleware 1 executed");
    next(); // Pass control to the next function
};

// Middleware 2
const middleware2 = (req, res, next) => {
    console.log("Middleware 2 executed");
    next();
};

// Final route handler
app.get("/chained", middleware1, middleware2, (req, res) => {
    res.send("Final response after chaining!");
});



// Method chaining

app.get('/', (req, res) => {
    res.send('GET page')
}).post('/', (req, res) => {
    res.send('POST page')
}).put('/', (req, res) => {
    res.send('PUT page')
}).delete('/', (req, res) => {
    res.send('DELETE page')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})