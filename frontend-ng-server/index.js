const express = require("express");
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})
const server = app.listen(PORT, () =>
    console.log('APP IS RUNNING ON THE PORT - 5001...')
)