const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 5001;
const productCategories = require('./routes/productCategories');

app.use(cors());
app.use('/productCategories',productCategories);


const server = app.listen(PORT, () =>
    console.log('APP IS RUNNING ON THE PORT - 5001...')
)