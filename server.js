const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:0.0.0.0/hotelBooking';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DataBase is connected"))
  .catch((err) =>{
    console.log("Error connecting to database")
    console.log(err)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => 
    console.log(`Server listening on port ${PORT}`)
);