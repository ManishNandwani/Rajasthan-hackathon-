var express = require("express");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var server = express();
server.use(express.static('partial'));

var url = "mongodb://localhost:27017";
var db;
MongoClient.connect(url,function(err,client){

    db = client.db("firstDatabase");
    console.log(err);
})



server.get("/home",function(req,res){


    var firstname  = req.query.firstname;
    var lastname  = req.query.lastname;
    var age  = req.query.age;
    var gender  = req.query.gender;
    var mobile  = req.query.mobile;
    var address  = req.query.address;
    var username  = req.query.username;
    var password  = req.query.password;
    db.collection('signup').insertMany([{username:username,password:password,firstname:firstname,lastname:lastname,age:age,gender:gender,mobile:mobile,address:address}],
        function(err,result)
        {
        console.log(err,result);
        res.redirect('/#!/home')
        })
    
})
server.get("/form",function(req,res){


    var firstname  = req.query.firstname;
    var lastname  = req.query.lastname;
    var age  = req.query.age;
    var proof  = req.query.proof;
    var mobile  = req.query.mobile;
    var address  = req.query.address;
    var dob  = req.query.dob;
    var state  = req.query.state;
    var carname  = req.query.carname;
    var company=req.query.company;
    var email  = req.query.email;
    var challan  = req.query.challan;
    var affidavit  = req.query.affidavit;
    var engine  = req.query.engine;
    var image  = req.query.image;
    db.collection('form').insertMany([{state:state,carname:carname,comapany:company,email:email,challan:challan,affidavit:affidavit,engine:engine,image:image, proof:proof,dob:dob,firstname:firstname,lastname:lastname,age:age,image:image,mobile:mobile,address:address}],
        function(err,result)
        {
        console.log(err,result);
        res.json({status:"success"})
        })
    
})

server.get("/users",function(req,res){

    db.collection('students').find({}).toArray(function(err,result){
        console.log(err,result);
        res.send(result);
    })
    
})
server.listen(8000,function(){
    console.log("server started")
})

console.log("test")