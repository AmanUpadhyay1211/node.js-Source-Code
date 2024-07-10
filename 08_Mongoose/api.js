const mongoose = require('mongoose'); //to use function of mongoose find() and other
const main = require(`./mongoose`); //importing model schema and product > itenms from that file
const express = require(`express`); // using express to ignore http and doing that same thing injust 3-4lines
const app = express(); // to creating routes
app.use(express.json()) // parse into the data into redable json

// app.get( '/show', async (req, res) => {
//    let item = await main();
//     let data =  await item.find(); 
//     res.send(data)
// })


// app.post( "/add", async (req,res)=>{
//     let item = await main();
//     let data = new item(req.body) ;  //Creating a new item from request body---> a extra step
//     let result =await data.save();
//   console.log(result)  ;
//   res.send(result);
// })


// app.put( "/update/:name", async (req,res)=>{
//     let item = await main();
//     let result =await item.updateOne({name : req.params.name},{$set:req.body});
//   console.log(result)  ;
//   res.send(result);
// })


// app.delete( "/delete/:id", async (req,res)=>{
//     let item = await main();
//     let result =await item.deleteOne({_id : req.params.id});
//   console.log(result)  ;
//   res.send(result);
// })

app.get(`/search/:key`,async (req , res) =>{
    let item = await main();
    console.log(req.params.key);
        let data = await item.find({"$or":
        [
            {name :{$regex:req.params.key}},
            {category :{$regex:req.params.key}}
        ]
    })
        res.send(data)
})
app.listen(5000)