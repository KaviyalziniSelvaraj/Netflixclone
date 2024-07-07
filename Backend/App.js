const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cors=require('cors');
app.use(bodyparser.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/cloneflix')
.then(()=>{console.log("Database Connected successfully!!")}).catch((err)=>{console.log(err)});
const dbschema=new mongoose.Schema({
    email:String,
    pwd:String
});
const Auth=mongoose.model('auth',dbschema);
app.post('/',async (req,res)=>{
    const val=req.body;
    console.log(val);
    const hashpwd=await bcrypt.hash(val.pwd,10);
    let newauth=new Auth({
        email:val.email,
        pwd:hashpwd
    });
    newauth.save().then(()=>{
        res.status(200).send("account created successfully");
    }).catch((err)=>{
        res.status(500).send(err+"Database error");
    });
});
app.post('/login',(req,res)=>{
    const val=req.body;
    const token=jwt.sign(val,'#clone-flix$login!',{expiresIn:'10m'});
    if(Auth.find(val)!=null)
        {
            res.status(200).send(token);
        }
    else
    res.status(500).send("Login failed");
});
app.listen(5000);