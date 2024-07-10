const dbConnect = require(`./mongodb.js`)

const deleteData = async (data)=>{
    let foodItems = await dbConnect();
  let result = await  foodItems.deleteMany({ $or: data })
    if(result.acknowledged)
    {
        console.log(result)
        console.log("data is deleted")
        console.log(`Element deleted = ${result.deletedCount}`)
    }
    if(result.deletedCount <=0 ){
        console.log(`Wrong Data`)
    }
}

deleteData([{"quantity": 1 }, { "name" : `pizza`}])
