const express = require('express');
const products = express.Router();
const pool = require('../shared/pool');

products.get('/', (req,res)=>{
  var categoryId = req.query.categoryId;
  let query = 'select * from products ';
  console.log("categoryId IS " + categoryId);
  //when categoryId=1, it's allCategory, so query no need to change
  if (categoryId && (categoryId!=='1')){
    query += 'where category_id = ' + categoryId;
  }

  var keyword = req.query.keyword;
  if (keyword){
    query += ` where  keywords like '%${keyword}%'`;
  }
  console.log("keyword is " + keyword, "query is " + query);
  pool.query(query,(error, products)=>{
      if (error)
          res.status(500).send(error);
      else
          res.status(200).send(products);
  } )
})

products.get('/(:id)', (req, res) => {
    let id = req.params.id;
    pool.query('select * from products where id = ' + id, (error, products) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(products);
      }
    });
  });
  
module.exports = products;