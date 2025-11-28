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

app.listen(3200,()=>{
    console.log("Backend Application Is connected at 3200 port");
    
})