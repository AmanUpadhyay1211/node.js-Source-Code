const express = require('express');
const app = express();

// When we have to create more than one middleware we should then create a diffrent js file only for middleware and then export it
const filterRequest = (req, res, next) => {
    const age = req.query.age;
    
    if (!age || isNaN(age)) {
        res.send('Reload website and please enter a valid age.');
    } else if (age < 18) {
        res.send('You are underage.');
    } else {
        next();
    }
};

// Apply the middleware globally aplication level
// app.use(filterRequest);

// app.get('/', (req, res) => {
//     res.send('Welcome to our Website!');
// });

// app.get('/home', (req, res) => {
//     res.send('Welcome to our Website Home Page!');
// });
// app.get('/about', (req, res) => {
//     res.send('Welcome to our Website about Page!');
// });
// app.get('/contact', (req, res) => {
//     res.send('Welcome to our Website contatct Page!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });



// Apply the middleware customaly route level middleware
const route = express.Router();
app.use(route);
route.use(filterRequest);
// NOw we add customly middle ware to our wanted routes just replace app with this route

route.get('/', (req, res) => {
    res.send('Welcome to our Website!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to our Website Home Page!');
});
route.get('/about', (req, res) => {
    res.send('Welcome to our Website about Page!');
});
app.get('/contact', (req, res) => {
    res.send('Welcome to our Website contatct Page!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
