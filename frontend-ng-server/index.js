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
    pool.getConnection((err, connection)=>{
        if(err)
            res.status(500).send(err);
        else{
            pool.query('select* from categorie', (error, categories)=>{
                if (error)
                    res.status(500).send(error);
                else
                    res.status(200).send(categories);
            })
        }
            
    })
})

const server = app.listen(PORT, () =>
    console.log('APP IS RUNNING ON THE PORT - 5001...')
)