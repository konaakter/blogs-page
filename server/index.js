const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(express.json());
app.use(cors())


const dbConect = require ("./utils/dbConect.js");
const blogRoute = require ("./router/blog.router.js");


app.get('/', (req, res) => {
    res.send('Hello World!')
})




dbConect();
app.use("/blog", blogRoute)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

