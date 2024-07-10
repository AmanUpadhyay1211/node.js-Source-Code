// CURD
// Creating files dynamically in folder
const path = require(`path`)
const fs = require(`fs`)

const folderPath = path.join(__dirname,`folder`);

// for (let i = 1; i <= 5; i++) {
//     fs.writeFileSync(`${folderPath}/textfile${i}.txt`, `i am file no ${i}`)
// }

// Get files name and print from directory
// fs.readdir(folderPath, ((err, folder)=>{
//     folder.forEach((file)=>{
//    console.log(file)
//     })
// }))

// read a file
// fs.readFile(folderPath + `/textfile1.txt`,((e,data)=>console.log(data.toString())))

// Append something in a file
// fs.appendFile(folderPath + `/textfile1.txt`,` i am appended text`, ((e,d)=>{
//     if(!e){
//         console.log(`file is updated`)
//     }
// }))

// REname a text file
fs.rename(folderPath + `/textfile1.txt`, folderPath + `/renametextfile1.txt`,(e=>{
    if(!e){
        console.log(`file name is updated`)
    }
}))

// deletion
fs.unlinkSync(folderPath + `/textfile2.txt`)