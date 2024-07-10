const express = require( 'express' );
const app = express();

app.get('/', (req, res) => {
    res.status(201);
    res.send('<h1>This is Home page</h1>');
})
app.get('/about', (req, res) => {
      res.send(`This is about page`)
})
app.get('/help', (req, res) => {
      res.send(`[
            {
              Name: "Aman Upadhyay",
              Job: "Coder",
            },
            {
              Name: "Gourav Jha",
              Job: "Nothing",
            },
            {
              Name: "Jaspreet",
              Job: "Corporate",
            },
            {
              sum : function(n,m){
                  return n+m;
              }
            }
          ]`)
})
app.listen(5000)