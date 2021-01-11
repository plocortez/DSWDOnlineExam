//jshint esversion:6

const express=require("express");

const app = express();
app.use(express.static("public"));

app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{
	res.redirect("/");
})

app.post("/registration",(req,res)=>{
	res.sendFile(__dirname + "/registration.html");
});

app.post("/login",(req,res)=>{
	res.sendFile(__dirname + "/login.html");
})

app.listen(3000,(req,res)=>{
	console.log("Server starting at port 3000");
});