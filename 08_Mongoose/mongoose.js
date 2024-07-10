const mongoose = require('mongoose');

async function main() {
  // Connect to the local MongoDB server
  await mongoose.connect('mongodb://localhost:27017/Products');
  // Define a schema for the "Food-Items" collection
  const itemSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity : Number,
    brand :String ,
    category:String
  });
  // Create a model based on the schema
  const Item = mongoose.model('Food-Items', itemSchema, 'Food-Items');
  return Item;

// Create a new document (food item)
//   let foodItem = new Item({ name: 'Pizza', price: 55,quantity: 90 });
//   // Save the document to the database and log the result
//   console.log(await foodItem.save());
}

module.exports = main;
