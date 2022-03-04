const express = require("express")
const app = express();
const path = require("path")
const port = process.env.PORT || 3000
require("./db/conn")
const hbs = require("hbs")
const User = require("./modals/userInfo");
const async = require("hbs/lib/async");

const staticpath = path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")
app.use(express.urlencoded({extended:true}))
app.use(express.static(staticpath))
app.set("view engine","hbs")
app.set("views",templatePath)
hbs.registerPartials(partialsPath)
 
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/contact",(req,res)=>{
    res.render("contact");
    
})

app.post("/contact",async (req,res)=>{
    try {
       const userData = new User(req.body);
       await userData.save();
       res.status(201).render("contact")
    } catch (error) {
        res.status(401).send("Page is not found");
    }
})
app.get("/about",(req,res)=>{
    res.render("about")
    
})
app.get("/myskill",(req,res)=>{
    res.render("myskill")
})
app.get("/services",(req,res)=>{
    res.render("services")
})

app.listen(port,(req,res)=>{
    console.log(`Successfully connected on ${port}`);
})

