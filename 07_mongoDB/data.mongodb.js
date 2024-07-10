// Select the database to use.
use('Products');

// Insert a few documents into the sales collection.
db.getCollection('Food-Items').insertMany([
    { "name": "chocolate", "price": 10, "quantity": 2, "date": "2014-03-01T08:00:00Z", "brand": "Sweet Delights" },
    { "name": "pizza", "price": 15, "quantity": 1, "date": "2019-05-15T12:30:00Z", "brand": "Pizza Palace" },
    { "name": "ice cream", "price": 8, "quantity": 3, "date": "2020-09-10T18:45:00Z", "brand": "Cool Treats" },
    { "name": "burger", "price": 12, "quantity": 2, "date": "2021-02-20T14:15:00Z", "brand": "Grill Masters" },
    { "name": "sushi", "price": 20, "quantity": 4, "date": "2018-07-05T20:00:00Z", "brand": "Sushi Haven" },
    { "name": "coffee", "price": 5, "quantity": 1, "date": "2016-11-12T09:30:00Z", "brand": "Brewed Bliss" },
    { "name": "sandwich", "price": 7, "quantity": 2, "date": "2022-04-18T16:45:00Z", "brand": "Fresh Bites" },
    { "name": "pasta", "price": 14, "quantity": 3, "date": "2017-08-25T19:20:00Z", "brand": "Pasta Paradise" },
    { "name": "smoothie", "price": 9, "quantity": 2, "date": "2015-12-08T11:00:00Z", "brand": "Juice Junction" },
    { "name": "salad", "price": 6, "quantity": 1, "date": "2019-03-30T13:45:00Z", "brand": "Green Goodness" },
    { "name": "cookies", "price": 8, "quantity": 5, "date": "2023-01-05T22:10:00Z", "brand": "Sweet Tooth Bakery" },
    { "name": "pancake", "price": 11, "quantity": 2, "date": "2018-06-14T07:30:00Z", "brand": "Fluffy Delights" },
    { "name": "fruit bowl", "price": 13, "quantity": 1, "date": "2016-09-22T14:50:00Z", "brand": "Fresh Harvest" },
    { "name": "steak", "price": 25, "quantity": 1, "date": "2020-11-28T19:30:00Z", "brand": "Prime Cuts Grill" },
    { "name": "cupcake", "price": 7, "quantity": 3, "date": "2017-04-03T15:15:00Z", "brand": "Cupcake Creations" }
  ]
  );
