const express = require("express");
const app = express();


const persona = {
    edad : 34,
    nombre : "pitufina",
    altura : 2.00,
}


app.get("/", function (req, res) {
  res.json(persona)
});


app.get("/persona", function (req, res){
    res.send("rafael hizo esto")
})


app.listen(3000)



