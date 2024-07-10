const main = require(`./mongoose`)


// const save = async () => {
    //  let Item = await main();
//   // Create a new document (food item)
//   let foodItem = new Item({ name: 'Pizza', price: 55,quantity: 90 });
//   // Save the document to the database and log the result
//   console.log(await foodItem.save());
// }


// const update = async () => {
    //  let Item = await main();
//   let data = await Item.updateOne({category : `Pasta`},{$set:{price:34,name:`India's Best spaghetti`}})
//   console.log(data)
// }


// const deleteInDB = async () => {
 //  let Item = await main();
//       let data = await Item.deleteOne({category : `Pasta`})
//       console.log(data)
//     }

const read = async () => {
    let Item = await main();
      let data = await Item.find();
      console.log(data)
    }

read()
