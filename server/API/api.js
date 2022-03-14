const express =  require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect("mongodb://localhost:27017/gpaDB");

const userSchema = new mongoose.Schema({
  email : String,
  password : String,
  listOfImageURL : [String]
});

const users = new mongoose.model("users",userSchema);


app.post("/register",function(req,res){
  const defaultURLs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqK53mxBwu2kcvwtd2H2ubms89hv70sztZw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OEOKvq4FqE1ixXabz_0KA55kNp0NtYcfqw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6oPIzWAVL6bJTbPZ4N2paZ1xpqti-QRj7g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGyOXXirSyzE3dWNNqam3jtKlZGbxZx640Q&usqp=CAU"];

  const user = new users({email : req.body.mail,password : req.body.password,listOfImageURL : defaultURLs+req.body.url});
  user.save();
});

app.get("/user/:email/data",function(req,res){
  res.send({message : "Dinesh is a fucker"});
  users.findOne({email : email},function(err,docs){
    if(err)
    {
      res.send(err);
    }
    else
    {
      if(docs)
      {
        res.send(docs)
      }
      else
      {
        res.send({status : 666});
      }
    }
  });
});


app.listen(5000 || process.env.PORT,function(){
  console.log("API SERVER IS UP AND RUNNING...");
});
