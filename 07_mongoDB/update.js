const dbConnect = require(`./mongodb.js`)


const updateData = async (filter,update)=>{
    let foodItems = await dbConnect();
  let result = await  foodItems.updateMany(filter,update)
    if(result.acknowledged)
    {
        console.log(result)
        console.log("data is updated")
        console.log(`Element deleted = ${result.modifiedCount}`)
    }
}

updateData( {"quantity": 2 },{$set:{"quantity": 222}} )