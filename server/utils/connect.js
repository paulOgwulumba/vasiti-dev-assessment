const { MongoClient } = require("mongodb")
const atlasURI = "mongodb+srv://forex-microservice:forex-microservice@forex-cluster.djnjd.mongodb.net/products?retryWrites=true&w=majority"

const Client = new MongoClient(atlasURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
 
module.exports = Client