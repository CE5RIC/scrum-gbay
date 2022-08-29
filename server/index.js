const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const Database = require("./models/Database");

// routing; cors exception/work-around
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

//app.get("/", (req, res) => {
 // res.json({ message: "Hello from server!" });
//});

// triggers getAllUsers() from 'Database' model
app.get("/api/users", async (req, res) => {
  try{
    const result = await Database.Database.getAllUsers()
    res.status(200).send(result)
  }catch (error){
    res.status(500).send(error)
  }
});

// triggers getUserById() from 'Database' model
app.get("/api/user/id/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const result = await Database.Database.getUserById(id)
    res.status(200).send(result)
  }catch (error){
    res.status(500).send(error)
  }
});

// handles  getAllProducts query
app.get("/api/products", async (req, res) => {
  try{
    const result = await Database.Database.getAllProducts();
    res.status(200).send(result)
  }catch (error){
    res.status(500).send(error)
  }
});

// triggers getProductById() from 'Database' model
app.get("/api/product/id/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const result = await Database.Database.getProductById(id);
    res.status(200).send(result)
  }catch (error){
    res.status(500).send(error)
  }
});

// triggers getProductByCategory() from 'Database' model
app.get("/api/product/category/:category", async (req, res) => {
  try{
    const category = req.params.category;
    const result = await Database.Database.getProductByCategory(category);
    res.status(200).send(result)
  }catch (error){
    res.status(500).send(error)
  }
});



// triggers addProduct() from 'Database' model
app.post("/api/product", async (req, res) => {
  try{
    const product = req.params.product;
    const result = await Database.Database.addProduct(product);
    res.status(200).send(result)
  }catch (error){
    res.status(500).send(error)
  }
});

// triggers getAllCategories from 'Database' Model
app.get("api/categories", async (req, res) => {
  try{
    const result= await Database.Database.getAllCategories();
    res.status(200).send(result)
  } catch(error){
    res.status(500).send(error)
  }
});

// triggers addOrder() from 'Database' model
app.post("/api/order", async (req, res) => {
  try{
    const order = req.params.order;
    const result = await Database.Database.addOrder(order);
    res.status(200).send(result)
  }catch (error){
    res.status(500).send(error)
  }
});

const root = require('path').join(__dirname, 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


