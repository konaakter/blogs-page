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
/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://blog:1243erfdfgr5@cluster0.ah3a7qz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        //await client.connect();
        // Send a ping to confirm a successful connection
        //await client.db("admin").command({ ping: 1 });
       // console.log("Pinged your deployment. You successfully connected to MongoDB!");

       // const blogcalection = client.db("blogbd").collection("blog");

        /*app.post('/blog', async (req, res) => {
            const addblog = req.body;
            console.log(addblog);
            const addblogresult = await blogcalection.insertOne(addblog);
            res.send(addblogresult);
        });

        app.get('/blog', async (req, res) => {
            const cursor = blogcalection.find();
            const blogGetResult = await cursor.toArray();
            res.send(blogGetResult);
        })



    } finally {
        // Ensures that the client will close when you finish/error
       // await client.close();
    }
}
run().catch(console.dir);*/


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//1243erfdfgr5
//blog