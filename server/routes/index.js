const express = require('express');
const router = express.Router();
const cors = require('cors')
router.use(cors())

// This will test the database connection
const Client = require("../utils/connect");
Client.connect((error, db) => {
  if(db){
    console.log("Successfully connected to database");
  } else{
    console.log(error);
  } 
})


//Fetch all products from database
router.get('/', async (request, response) => {
  
  Client.connect((error, db) => {
    if(db){
      let productsDB = db.db("products")
      productsDB.collection("product-data").find({}).toArray((error, result) => {
        if(error) console.log(error)
        else {
          console.log(result)
          response.send(result)
        }
      })
    } else{
      console.log(error);
    } 
  })
})


//Add new product to database
router.post('/', (request, response) => {
  console.log(request.body)
  Client.connect((error, db) => {
    if(db){
      let productsDB = db.db("products")
      productsDB.collection("product-data").insertOne(request.body, (error, result) => {
        if(error) console.log(error)
        else {
          console.log("Successfully uploaded")
          response.json({status: "successful"})
        }
      })
    } else{
      console.log(error);
      response.end()
    } 
  })
})

//Edit product variety (also deletes)
router.put('/', (request, response) => {
  console.log(request.body)
  Client.connect((error, db) => {
    if(db){
      let productsDB = db.db("products")
      productsDB.collection("product-data").updateOne({product_name: request.body.product_name}, request.body, (error, result) => {
        if(error) console.log(error)
        else {
          console.log("Successfully updated")
          response.json({status: "successful"})
        }
      })
    } else{
      console.log(error);
      response.end()
    } 
  })
})

module.exports = router;
