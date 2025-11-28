const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login',(req,res)=>{
    let userData = {
        username : req.body.username,
        password : req.body.password
    }
    if(userData.username == "varun" && userData.password == 'bkr'){
        res.json({flag :true, msg : 'Login Success'});
    } else{
        res.json({flag :true, msg : 'Login Success'});
    }
});

let foodData = [
    {foodName:'French Fries', price:'Rs.250/-',catogory:'veg'},
    {foodName:'Tandoori Mushrooms', price:'Rs.450/-',catogory:'veg'},
    {foodName:'Chicken Alabu', price:'Rs.550/-',catogory:'non-veg'},
    {foodName:'Dragon Prawns', price:'Rs.650/-',catogory:'non-veg'}
]

let drinkData = [
    {drinkData:'Virgin Mojito', price:'Rs.250/-',catogory:'mocktail'},
    {drinkData:'Pinacolada', price:'Rs.350/-',catogory:'mocktail'},
    {drinkData:'Sex on the Beach', price:'Rs.550/-',catogory:'cocktail'},
    {drinkData:'Moscow Mule', price:'Rs.650/-',catogory:'cocktail'}
]

let data =[foodData,drinkData];

app.get('/data',(req,res)=>{
    res.json(data);
})

app.listen(3200,()=>{
    console.log("Backend Application Is connected at 3200 port");
    
})