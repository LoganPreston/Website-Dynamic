require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const currentYear = new Date().getFullYear();
  res.render("home", { year: currentYear });
});

app.get("/contact",function(req,res){
    const currentYear = new Date().getFullYear();
    res.render("contact", { year: currentYear });
});

app.get("/thankYou",function(req,res){
    const currentYear = new Date().getFullYear();
    res.render("thankYou",{year:currentYear});
});

app.post("/contact",function(req,res){
    console.log(req.body);
    res.redirect("/thankYou")
})

port = process.env.PORT;
if (port === "" || port === null) {
  port = 3000;
}
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
