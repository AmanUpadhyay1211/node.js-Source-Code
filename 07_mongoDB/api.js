const { ObjectId } = require("mongodb");
const dbConnect = require(`./mongodb`);
const express = require(`express`);
const app = express();
app.use(express.json())


app.get( `/`,async (req, res) => {
    // Connect to the database and get all documents in the collection "users"
    const foodItems =await  dbConnect();
    const data = await foodItems.find().toArray()
    res.send(data);
})

app.post( `/`,async (req, res) => {
//     Add a new document with the content from req.body to the collection "users"
    const foodItems = await  dbConnect();
    const document = req.body;
    const result =  await foodItems.insertOne(document);
    console.log(result);
    if(result.acknowledged){
        res.send(`Document inserted`)
    }
})

app.put( `/:name`,async (req, res) => {
    // Update one or more fields of the document with the id equal to req.params.name
    const foodItems = await  dbConnect();
    const result =  await foodItems.updateOne({name : req.params.name},{$set:req.body});
    res.send(`hello world`)
    console.log(result);
    if(result.acknowledged)
    {
        console.log(`Element Updated = ${result.modifiedCount}`)
    }
})

app.delete('/:id', async (req,res)=>{
    const foodItems = await  dbConnect();
    const id = req.params.id
    const result= await foodItems.deleteOne({_id:new ObjectId(id)})
    res.send(`element deleted`)
    if(result.deletedCount > 0){
        console.log(`${result.deletedCount} items deleted`)}
    }
)

app.listen(8000)