const express =  require('express');
const path =  require('path');
const app = express();

const public = path.join( __dirname, 'public' );

// app.use(express.static(public));
app.listen(5000);


// how to use cusom url and hide html from url
app.get(``,(req,res)=>{
   res.sendFile(public + `/index.html`);
})
app.get(`/about`,(req,res)=>{
   res.sendFile(public + `/about.html`);
})
app.get(`/h`,(req,res)=>{
   res.sendFile(public + `/help.html`);
})
app.get(`*`,(req,res)=>{
   res.sendFile(public + `/404.html`);
})