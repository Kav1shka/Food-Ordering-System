const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const users =require("./routes/users.js");
const passport = require("passport");


const dotenv=require("dotenv");
dotenv.config();

const app=express(); 

mongoose.set("strictQuery", false);
//const PORT = 8000;

const PORT= process.env.PORT || 8000;
app.use(cors());
 
//app midddleware  
app.use(bodyParser.json());

//const Customer=require('./routes/customer');


//const DB_URL='mongodb+srv://kavishka:tj497yudqT51BiiT@cluster0.po8zq.mongodb.net/?retryWrites=true&w=majority';
// const URL=process.env.MONGODB_URL;
// const connect=mongoose.connection;
// mongoose.connect(URL,
  
// err => {
//   if(err) throw err;
//   console.log('Connected to MongoDB!!!')
// }
// );
// then(()=>{
//   console.log('Database Connected!!!');
// })
// .catch((err)=>console.log("Database Connection Error ",err));

// const connection=mongoose.connection;
// connection.once('open',()=>{
    // console.log("Mongodb Connection Success!");
// })

const url  = "mongodb+srv://Kavishka28:Kavishka28@foodorderingsystem.aidyusg.mongodb.net/test";

// const CLOUDINARY_URL='cloudinary://955612828956314:0phn-D7W7PlckD2ENN4t8d-haA8@dxoyfttuj';
mongoose.connect(url,
    err => {
        if(err) throw err;
        console.log('MongoDB is connected...')
    });

app.use(passport.initialize());
require("./config/passport")(passport);

const customerRouter=require("./routes/CustomerRoute");
app.use("/customer",customerRouter);

const FoodrRouter=require("./routes/FoodRoute");
app.use("/products",FoodrRouter);

const OrderRouter=require("./routes/OrderRoute");
app.use("/orderDetails",OrderRouter);

const AauthenticationRouter=require("./routes/AuthRoute");
app.use("/customer",AauthenticationRouter);

app.use("/users", users)

const FeedbackRouter=require("./routes/feedbackRoute");
app.use("/feedback",FeedbackRouter);


const CartRouter=require("./routes/CartRoute");
app.use("/cart",CartRouter);

app.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`)
});