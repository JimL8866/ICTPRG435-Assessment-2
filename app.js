import path from "path";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//create simple web server
import express from "express";
const app = express();

app.use(express.static("public"))


//send index.html to user if receive get method
app.get("/", (req, res)=>{

    res.sendFile(__dirname +"/index.html")
})


app.listen(7500, ()=>{
    console.log("server is currently running on port 80 at http://127.0.0.1:7500");
})

