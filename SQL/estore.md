classDiagram
direction BT
class categories {
   varchar(45) category
   int id
}
class orders {
   datetime orderDate
   varchar(100) userName
   varchar(45) address
   varchar(45) city
   varchar(45) state
   varchar(10) pin
   decimal(10) total
   int userId
   int orderId
}
class products {
   varchar(45) product_name
   varchar(100) product_description
   decimal(10) price
   int ratings
   int category_id
   varchar(45) product_img
   varchar(200) keywords
   int id
}
class users {
   varchar(45) email
   varchar(45) firstName
   varchar(45) lastName
   varchar(45) address
   varchar(45) city
   varchar(45) state
   varchar(45) pin
   varchar(500) password
   int id
}

orders  -->  users : userId:id
products  -->  categories : category_id:id
