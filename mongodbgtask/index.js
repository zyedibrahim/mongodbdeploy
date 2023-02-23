// Find all the information about each products
// Find the product price which are between 400 to 800
// Find the product price which are not between 400 to 600
// List the four product which are grater than 500 in price 
// Find the product name and product material of each products
// Find the product with a row id of 10
// Find only the product name and product material
// Find all products which contain the value of soft in product material 
// Find products which contain product color indigo  and product price 492.00
// Delete the products which product price value are same







db.products.insertMany(
    [
        {
            "id": "1",
            "product_name": "Intelligent Fresh Chips",
            "product_price": 655.00,
            "product_material": "Concrete",
            "product_color": "mint green"
        },
        {
            "id": "2",
            "product_name": "Practical Fresh Sausages",
            "product_price": 911.0,
            "product_material": "Cotton",
            "product_color": "indigo"
        },
        {
            "id": "3",
            "product_name": "Refined Steel Car",
            "product_price": 690.00,
            "product_material": "Rubber",
            "product_color": "gold"
        },
        {
            "id": "4",
            "product_name": "Gorgeous Plastic Pants",
            "product_price": 492.00,
            "product_material": "Soft",
            "product_color": "plum"
        },
        {
            "id": "5",
            "product_name": "Sleek Cotton Chair",
            "product_price": 33.00,
            "product_material": "Fresh",
            "product_color": "black"
        },
        {
            "id": "6",
            "product_name": "Awesome Wooden Towels",
            "product_price": 474.00,
            "product_material": "Plastic",
            "product_color": "orange"
        },
        {
            "id": "7",
            "product_name": "Practical Soft Shoes",
            "product_price": 500.00,
            "product_material": "Rubber",
            "product_color": "pink"
        },
        {
            "id": "8",
            "product_name": "Incredible Steel Hat",
            "product_price": 78.00,
            "product_material": "Rubber",
            "product_color": "violet"
        },
        {
            "id": "9",
            "product_name": "Awesome Wooden Ball",
            "product_price": 28.00,
            "product_material": "Soft",
            "product_color": "azure"
        },
        {
            "id": "10",
            "product_name": "Generic Wooden Pizza",
            "product_price": 84.00,
            "product_material": "Frozen",
            "product_color": "indigo"
        },
        {
            "id": "11",
            "product_name": "Unbranded Wooden Cheese",
            "product_price":26.00,
            "product_material": "Soft",
            "product_color": "black"
        },
        {
            "id": "12",
            "product_name": "Unbranded Plastic Salad",
            "product_price": 89.00,
            "product_material": "Wooden",
            "product_color": "pink"
        },
        {
            "id": "13",
            "product_name": "Gorgeous Cotton Keyboard",
            "product_price": 37.00,
            "product_material": "Concrete",
            "product_color": "sky blue"
        },
        {
            "id": "14",
            "product_name": "Incredible Steel Shirt",
            "product_price": 54.00,
            "product_material": "Metal",
            "product_color": "white"
        },
        {
            "id": "15",
            "product_name": "Ergonomic Cotton Hat",
            "product_price": 43.00,
            "product_material": "Rubber",
            "product_color": "mint green"
        },
        {
            "id": "16",
            "product_name": "Small Soft Chair",
            "product_price": 47.00,
            "product_material": "Cotton",
            "product_color": "teal"
        },
        {
            "id": "17",
            "product_name": "Incredible Metal Car",
            "product_price":36.00,
            "product_material": "Fresh",
            "product_color": "indigo"
        },
        {
            "id": "18",
            "product_name": "Licensed Plastic Bacon",
            "product_price":88.00,
            "product_material": "Steel",
            "product_color": "yellow"
        },
        {
            "id": "19",
            "product_name": "Intelligent Cotton Chips",
            "product_price": 46.00,
            "product_material": "Soft",
            "product_color": "azure"
        },
        {
            "id": "20",
            "product_name": "Handcrafted Wooden Bacon",
            "product_price": 36.00,
            "product_material": "Concrete",
            "product_color": "lime"
        },
        {
            "id": "21",
            "product_name": "Unbranded Granite Chicken",
            "product_price": 90.00,
            "product_material": "Metal",
            "product_color": "gold"
        },
        {
            "id": "22",
            "product_name": "Ergonomic Soft Hat",
            "product_price": 99.00,
            "product_material": "Rubber",
            "product_color": "black"
        },
        {
            "id": "23",
            "product_name": "Intelligent Steel Pizza",
            "product_price": 95.00,
            "product_material": "Cotton",
            "product_color": "azure"
        },
        {
            "id": "24",
            "product_name": "Tasty Rubber Cheese",
            "product_price":47.00,
            "product_material": "Frozen",
            "product_color": "orchid"
        },
        {
            "id": "25",
            "product_name": "Licensed Steel Car",
            "product_price":20.00,
            "product_material": "Cotton",
            "product_color": "indigo"
        }
    ]

)

db.products.find({})

db.products.find({product_price:{$gte:400, $lte:800 }  },{_id:0, product_price:1})

db.products.find({product_price:{$ne:400,$ne:600 }  },{_id:0, product_price:1}) 

db.products.find({product_price:{$gte:500}  },{_id:0, product_name:1})

db.products.find({},{_id:0, product_name:1,product_material:1})

db.products.findOne({id:"10"})


db.products.find({},{_id:0, product_name:1,product_material:1})

db.products.find({product_material:"Soft"})


db.products.find({product_color:"indigo",product_price:{$eq:492.00}})
db.products.find({product_price:492.00})

db.products.aggregate([
    {$match: {product_color: "indigo"}},
    {$match: {product_price: 492.00}},
    
  ])
  
  
  
  












