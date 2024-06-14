import express from "express"
import {randomSuperhero} from 'superheroes';
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/" , (req , res)=>{
    res.render("home.ejs");
})
app.post("/submit" , (req , res)=>{
    const name =randomSuperhero();
    res.render("home.ejs",{ranName : name});
})
app.listen(port , ()=>{
    console.log("server started at port", port);
})