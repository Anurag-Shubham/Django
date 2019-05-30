
var express= require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var brand=require('./models/brands');
var app=express();
mongoose.connect('mongodb://localhost:27017/ecommercedb',{ useNewUrlParser: true });
// .then(function(){
//     console.log("db connected");
// }).catch(function(err){
//     console.log(err);
// });
var db=mongoose.connection;
app.get('/',function(req,res){
res.send('welcome to admin portal');
});
app.get('/api/brands',function(req,res){
    brand.getBrands(function(err,data){
        if(err){
            throw err;
        }
        else{
            res.json(data);
        }
    })
    // x.find({},function(err,y){
    //     res.json(y);
    // });
});
app.get('/api/brands/:id',function(req,res){
    brand.getBrandById(req.params.id,function(err,data){
        if(err){
            throw err;
        }
        else{
            res.json(data);
        }
    })
    // x.find({},function(err,y){
    //     res.json(y);
    // });
});
app.post('/api/brands',function(req,res){
    brand.create(function(err,data){
        if(err){
            throw err;
        }
        else{
            res.json(data);
        }
    })
    // brands.find({},function(err,brands){
    //     res.json(brands);
    // });
});
app.put('/api/brands/:id',function(req,res){
    brand.findByIdAndUpdate(req.params.id,req.body,function(err,data){
        if(err)
        { throw err;}
        else
        {
            res.json(data); 
        }
    })
});
app.delete('/api/brands/:id',function(req,res){
    var query={
        __id:req.params.id
    }
    brand.remove(query,function(err,data){
        if(err)
        { throw err;}
        else
        {
            res.json(data); 
        }
    })
})
app.listen(3000,function(){
    console.log('the server is running at port at 3000');
});