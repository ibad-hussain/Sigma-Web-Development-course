const express = require('express')
const app = express()
const port = 3000
const blogsRouter = require('./routes/blogs');
const shopsRouter = require('./routes/shops');

// Express Router implementation
app.use("/blogs", blogsRouter);
app.use("/shops", shopsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})