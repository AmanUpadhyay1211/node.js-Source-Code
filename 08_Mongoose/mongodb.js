const { MongoClient } = require(`mongodb`);

// Connection URl
const client = new MongoClient(`mongodb://localhost:27017/`);

const dbName = `Products`;

const dbConnect = async () => {
  // Use connect method to connect to the server
  let connection = await client.connect();
  // Access the specified database and collection
  let db = connection.db(dbName);
  return db.collection(`Food-Items`);
 

  //   Reading the response
  // let output = await collection.find().toArray();
  // console.log(`collection =`,output)
};

module.exports = dbConnect;
