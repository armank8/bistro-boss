const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
// DB codes
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y0bza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db("bistro-boss").collection("users");
    const menuCollection = client.db("bistro-boss").collection("menu");
    const reviewCollection = client.db("bistro-boss").collection("reviews");
    const cartCollection = client.db("bistro-boss").collection("carts");
    const paymentCollection = client.db("bistro-boss").collection("payments");

    // jwt related apis
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // middlewares
    // verify token
    const verifyToken = (req, res, next) => {
      // console.log("inside verify token", req.headers.authorization);
      if (!req.headers.authorization) {
        return res.status(401).send({ message: "unauthorized access" });
      }
      const token = req.headers.authorization.split(" ")[1];

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "unauthorized access" });
        }
        req.decoded = decoded;
        next();
      });
    };

    // verify  admin middleware
    // use verify admin after verifyToken
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        return res.status(403).send({ message: "forbidden access" });
      }
      next();
    };

    // Users related apis
    // get all users
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    // get a user by id
    app.get("/users/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const result = await userCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // verify if a user is an admin
    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      const query = { email: email };

      const user = await userCollection.findOne(query);
      let admin = false;
      if (user) {
        admin = user?.role === "admin";
      }
      res.send({ admin });
    });

    // POST : Create User
    app.post("/users", async (req, res) => {
      const user = req.body;
      // Insert email if user doesn't exists:
      //u can do this in many ways(1.email unique 2.upsert 3.simple checking)
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "User already exists", insertedId: null });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Make a user Admin
    app.patch("/users/admin/:id", verifyToken, verifyAdmin, async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            role: "admin",
          },
        };

        const result = await userCollection.updateOne(filter, updatedDoc);
        res.send(result);
      }
    );

    app.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    //  get menu
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    // get a menu item
    app.get("/menu/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await menuCollection.findOne(query);
      res.send(result);
    });

    // create menu
    app.post("/menu",verifyToken, verifyAdmin, async(req,res)=>{
      const item = req.body;
      const result = await menuCollection.insertOne(item);
      res.send(result);
    });

    // update menu
    app.patch('/menu/:id', async(req,res)=>{
      const item = req.body;
      const id = req.params.id;
      const filter = {_id:new ObjectId(id)};
      const updatedDoc = {
        $set:{
          name:item.name,
          category:item.category,
          price:item.price,
          recipe:item.recipe,
          image:item.image,
        }
      }
      const result = await menuCollection.updateOne(filter,updatedDoc);
      res.send(result);
    })

    // delete menu
    app.delete("/menu/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      // const query = { _id: id };
      const result = await menuCollection.deleteOne(query);
      res.send(result);
    });
    // reviews related apis
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    // carts related apis
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // stripe payment intent
    app.post('/create-payment-intent',async(req,res)=>{
      const {price} = req.body;

      if (!price || isNaN(price)) {
        console.log('Invalid price value');
        return res.status(400).json({ error: "Invalid price value" });
      }

      const amount = parseInt(price*100);

      const paymentIntent = await stripe.paymentIntents.create({
        amount:amount,
        currency:'usd',
        payment_method_types:['card']
      });
      res.send({
        clientSecret:paymentIntent.client_secret
      })
    })

    // make payment
    app.post('/payments',async(req,res)=>{
      const payment = req.body;
      const paymentResult = await paymentCollection.insertOne(payment);

      // carefully delete each item from the cart
      console.log('payment info',payment);
      const query ={_id:{
        $in:payment.cartIds.map(id => new ObjectId(id))
      }};

      const deleteResult = await cartCollection.deleteMany(query);

      res.send({ paymentResult, deleteResult });
    })

    app.get('/payments/:email',verifyToken, async(req,res)=>{
      const query = {email:req.params.email};
      
      if(req.params.email !== req.decoded.email){
        return res.status(403).send({message:'forbidden access'});
      }

      const result = await paymentCollection.find(query).toArray();
      res.send(result);
    })

    // stats or analytics
    app.get('/admin-stats',  verifyToken, verifyAdmin, async(req,res)=>{
      const users = await userCollection.estimatedDocumentCount();
      const menuItems = await menuCollection.estimatedDocumentCount();
      const orders = await paymentCollection.estimatedDocumentCount();

      // this is not the best way
      // const payments = await paymentCollection.find().toArray();
      // const revenue = payments.reduce((total, payment) => total + payment.price, 0);

      const result = await paymentCollection.aggregate([
        {
          $group:{
            _id:null,
            totalRevenue:{
              $sum:'$price'
            }
          }
        },
      ]).toArray();

      const revenue = result.length > 0 ? result[0].totalRevenue : 0;

      res.send({
        users, menuItems, orders, revenue 
      })
    });

    // using aggregation pipeline
    app.get('/order-stats',async(req,res)=>{
      const result = await paymentCollection.aggregate([

      ]).toArray();

      res.send({result});

    })

    // ---------------------------------------
    // Send a ping to confirm a successful connection

    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
    
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
