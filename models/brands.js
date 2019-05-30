
var mongoose=require('mongoose');
var brandSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    Desc:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});
var brand=module.exports=mongoose.model('brands',brandSchema);
module.exports.getBrands=function(callback){
brand.find(callback);
}
module.exports.getBrandById=function(id,callback){
    brand.findById(id,callback);
    }
module.exports.create=function(callback){
    brand.find(callback);
    }
// module.exports=create;
