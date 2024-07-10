
// EJS stands for Embedded JavaScript, and it is a simple templating language that lets you embed JavaScript code directly within your HTML markup. It's often used with Node.js and Express.js to dynamically generate HTML pages on the server side.

const express = require(`express`);
const data = require(`./data`)
const app = express();

app.set( `view engine`, `ejs` );

app.get(`/index`,(req,res)=>{
    const user ={
        name : `aman`,
        age:25,
        email:`aman@gmail.com`,
        skills:['c++','java','python',"html",`javascipt`]
    }
    res.render(`html.ejs`, { data, user });

})
app.listen(3000)
