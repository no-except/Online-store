const {Schema,model} = require("mongoose");

const Brand = new Schema({
    name:{type:String,required:true,unique:true},
});

module.exports = model('Brand',Brand);