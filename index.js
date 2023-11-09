const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())
app.use(express.json())
// suranjitm07
// njmSkyamt08jmla0
const user = [
    {id: 1, name: 'Pitu', email:'helloPitu@gmail.com'},
    {id: 2, name: 'Chiku', email:'hikuPitu@gmail.com'},
    {id: 3, name: 'Tinku', email:'inkuPitu@gmail.com'}
]
// Mongobd

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://suranjitm07:njmSkyamt08jmla0@cluster0.gzl03ny.mongodb.net/?retryWrites=true&w=majority";

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
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// mongobd end
app.get('/', (req, res) => {
  res.send('Hello World!hello')
})
app.get('/user', (req, res) => {
  res.send(user)
})
app.post('/user', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser);
//   res.send(req.body)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})