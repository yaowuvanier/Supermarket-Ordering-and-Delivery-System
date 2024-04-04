const express = require("express");
const app = express();
const mysql = require('mysql2');
const PORT = 5001;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'estore',
    port: 3306,
    multipleStatements: true
});

app.get('/', (req, res) => {
    let prodData = {
        pName: 'Bread',
        price: 5,
        img: 'bread.jpg'
    }
    res.status(200).send(prodData)
})
const server = app.listen(PORT, () =>
    console.log('APP IS RUNNING ON THE PORT - 5001...')
)