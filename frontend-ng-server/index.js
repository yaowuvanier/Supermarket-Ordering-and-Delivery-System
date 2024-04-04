const express = require("express");
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
    let prodData = {
        pName: 'Bread',
        price: 4,
        img: 'bread.jpg'
    }
    res.status(200).send(prodData)
})
const server = app.listen(PORT, () =>
    console.log('APP IS RUNNING ON THE PORT - 5001...')
)