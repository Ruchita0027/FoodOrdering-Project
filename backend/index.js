const express = require("express");
const cors = require("cors");
const app = express();

// const fs = require("fs");
const products = require("./products");

// app.set("view",path.join(__dirname))
// app.set("view engine", "ejs")


app.use(express.json());
app.use(cors());

//  app.post('/products/cart', function(req, res) {
//      const data = req.body;
//      users.push(data);
//      console.log(data);
//      res.send({"result" : "success"})
//      fs.writeFile("items.json", JSON.stringify(products), err => {

//      if (err) throw err;
//      console.log("Done writing");

//      });
//  })
 

//  app.get('/products/getDetails', (req, res) => {
//      res.header("Content-Type", 'application/json');
//      res.sendFile(path.join(__dirname, 'items.json'));

//  })

 app.get("/", (req, res) => {
   res.send("Welcome our to online shop API...");
 });

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 3001;

app.listen(port, console.log(`Server running on port ${port}`));


// let bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended : true }));


