const express = require ("express");
const mongoose=require("mongoose");
const app = express();
const methodOverride=require("method-override");
const port = process.env.PORT || 3000;

const Db="mongodb+srv://mukesh:mukesh@cluster0-dbbes.gcp.mongodb.net/test?retryWrites=true"

mongoose.connect(Db,{ useNewUrlParser: true })
.then(console.log("connected to the mongoose database"))

app.use(express.static(__dirname+'/public'));
app.use(methodOverride("_method"));
app.set('view engine','ejs');
const route =require('./routes');



//helps to fetch the data from the server
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',route);


app.listen(port,()=>{
    console.log("Server is running...");
})










