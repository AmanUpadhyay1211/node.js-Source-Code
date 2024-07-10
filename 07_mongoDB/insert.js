const dbConnect = require(`./mongodb.js`)

const insertData = async (data)=>{
    let foodItems = await dbConnect();
  let result = await  foodItems.insertMany(data)
    if(result.acknowledged)
    {
        console.log(result)
        console.log("data is inserted")
        console.log(`Element inserted = ${result.insertedCount}`)
    }
}

insertData(        
 [
     { "name": "barbecue grill", "price": 200, "quantity": 1, "brand": "GrillMaster", "category": "Outdoor Cooking" },      
]
)