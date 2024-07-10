const app = require( "./app" ); //How to import data from other js file


const fs = require( "fs" );
fs.writeFileSync("aman.txt", "My name is aman i am a good coder please mujhse code likhwaloapni company ke liye" ) ;


const colors = require( "colors" );
console.log(`${app[3].sum(4,6)}`.green.underline)



const http = require(`http`);
// http.createServer((req,resp)=>{
//    resp.writeHead(201, { "Content-Type": "text/plain" });
//    resp.write(`<h1>my first node program by aman</h1>`);
//    resp.end();
// }).listen(5000)




// Creating a demo api which will send static data
// http.createServer((req,resp)=>{
//    resp.writeHead(201,{ "content-type":"application/json"});
//    resp.write(JSON.stringify(app));
//    resp.end();
// }).listen(4500);




// How to take input from command line and making somethings useful from it
// console.log(process.argv)
// if(process.argv[2] === "create"){
//   fs.writeFileSync(process.argv[3], process.argv[4]);
// }
// else if(process.argv[2] === "remove"){
//    fs.unlinkSync(process.argv[3])
// }
// else{
//    console.log(`invalid input`)
// }




