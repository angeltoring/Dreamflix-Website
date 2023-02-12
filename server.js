const express = require("express")
const app = express()

app.use(express.static(__dirname + '/views'));
app.set("view engine" , "ejs")

app.get("/", (req, res) =>{
    res.render("frontpage.ejs")
})

app.get("/:file", (req, res) =>{
    res.render(`${req.params.file}.ejs`)
})

app.listen(3000)
