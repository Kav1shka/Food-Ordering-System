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
const customerRouter=require("./routes/CustomerRoute");
app.use("/API/customer",customerRouter);

const FoodrRouter=require("./routes/FoodRoute");
app.use("/API/products",FoodrRouter);

const OrderRouter=require("./routes/OrderRoute");
app.use("/API/orderDetails",OrderRouter);

const AauthenticationRouter=require("./routes/AuthRoute");
app.use("/API/customer",AauthenticationRouter);



app.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`)
});