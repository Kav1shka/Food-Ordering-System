const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
require("dotenv").config();
//const PORT = 8000;

const PORT= process.env.PORT || 8010;
app.use(cors());
 
//app midddleware  
app.use(bodyParser.json());

//const Customer=require('./routes/customer');


//const DB_URL='mongodb+srv://kavishka:tj497yudqT51BiiT@cluster0.po8zq.mongodb.net/?retryWrites=true&w=majority';
const URL=process.env.MONGODB_URL;
const connect=mongoose.connection;
mongoose.connect(URL,
  
err => {
  if(err) throw err;
  console.log('Connected to MongoDB!!!')
}
);
// then(()=>{
//   console.log('Database Connected!!!');
// })
// .catch((err)=>console.log("Database Connection Error ",err));

// const connection=mongoose.connection;
// connection.once('open',()=>{
    // console.log("Mongodb Connection Success!");
// })
const customerRouter=require("./routes/CustomerRoute.js");
app.use("/customer",customerRouter);

const FoodrRouter=require("./routes/FoodRoute.js");
app.use("/products",FoodrRouter);

const OrderRouter=require("./routes/OrderRoute.js");
app.use("/orderDetails",OrderRouter);


app.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`)
});