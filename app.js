require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

function randOneToTen() {
  return Math.floor(Math.random() * 10 + 1);
}

function isValid(numOne,numTwo,check,email){
    if(numOne + numTwo !== check){
        return false;
    }

    return true;
}

app.get("/", function (req, res) {
  const currentYear = new Date().getFullYear();
  res.render("home", { year: currentYear });
});

app.get("/contact", function (req, res) {
  const currentYear = new Date().getFullYear();
  let rand1 = randOneToTen();
  let rand2 = randOneToTen();
  res.render("contact", {
    year: currentYear,
    errorInfo: "",
    randVals: { randOne: rand1, randTwo: rand2 },
  });
});

app.get("/thankYou", function (req, res) {
  const currentYear = new Date().getFullYear();

  res.render("thankYou", { year: currentYear });
});

app.post("/contact", function (req, res) {
  console.log(req.body);
  //get the numbers and sanitize them
  let numberOne = Math.floor(req.body.randOne);
  let numberTwo = Math.floor(req.body.randTwo);
  let mathCheck = parseInt(req.body.mathCheck);

  //make sure the data sent over is accurate, if not, push back to contact page with error msg
  if (!isValid(numberOne,numberTwo,mathCheck,req.body.email)) {
    const currentYear = new Date().getFullYear();
    let rand1 = randOneToTen();
    let rand2 = randOneToTen();
    res.render("contact", {
      year: currentYear,
      errorInfo: "There was an error with your last request, please try again",
      randVals: { randOne: rand1, randTwo: rand2 },
    });
  } 
  //if the math check works, do something with info then send to thank you page
  else {
    
    res.redirect("/thankYou");
  }
});

port = process.env.PORT;
if (port === "" || port === null) {
  port = 3000;
}
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
