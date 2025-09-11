const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})



// Serving static files
app.use(express.static('public'));
app.use(express.static('files'));   // We can set multiple static assets directories




// Request parameters
app.get('/blogs/:slug', (req, res) => {
    res.send(`Hello ${req.params.slug} !`)
})

app.get('/blogs/:slug/:slug2', (req, res) => {
    res.send(`Hello ${req.params.slug} and ${req.params.slug2} !`)
})



// Request queries
app.get('/blogs/:slug', (req, res) => {
    // For URL: http://localhost:3000/blogs/js/api?mode=dark&region=pak
    console.log(req)        // Outputs 'req' object
    console.log(req.params) // Output: { slug: 'js', slug2: 'js' }
    console.log(req.query)  // Output: { mode: 'dark', region: 'pak' }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})