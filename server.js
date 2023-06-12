const express=require("express");
const  cors=require("cors");
const connectDB=require('./config/db_connect');
const app = express();
require('dotenv').config();

app.use(cors());
// connect to DB
connectDB();



// routes
app.use(express.json());

app.use("/user",require("./routes/user"));
app.use("/produit",require("./routes/produit"))
app.use("/commande",require("./routes/commande"))

//server
const PORT=process.env.PORT;
app.listen(PORT,(err)=> err ?
console.log(err) : console.log("server is running"));