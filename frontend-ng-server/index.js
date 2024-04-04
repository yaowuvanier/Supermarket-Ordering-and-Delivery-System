const express = require("express");
const app = express();
const PORT = 5001;
const productCategories = require('./routes/productCategories');

app.use('/productCategories',productCategories);

const server = app.listen(PORT, () =>
    console.log('APP IS RUNNING ON THE PORT - 5001...')
)