const express = require("express")
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')
const cors = require("cors")


const app = express()
const PORT = 3000

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoute)


app.get('/',(req,res)=>{
  res.send("hello from node api")
})

//mongo connect
mongoose.connect('mongodb+srv://{hidden}@cluster0.ovtve.mongodb.net/{hidden}?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!');
    app.listen(PORT,()=>{
      console.log(`server is running on port ${PORT}`)
       });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
  });






