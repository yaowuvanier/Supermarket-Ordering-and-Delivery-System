const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 5001;
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const users = require('./routes/users');
const bodyparser = require('body-parser');
const orders = require('./routes/orders')


app.use(cors());
app.use(bodyparser.json());
app.use('/productCategories',productCategories);
app.use('/products', products )
app.use('/users', users )
app.use('/orders', orders)

const server = app.listen(PORT, () =>
    console.log('APP IS RUNNING ON THE PORT - 5001...')
)