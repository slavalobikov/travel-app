const {Schema, model} = require('mongoose')

const schema = new Schema({
    email:{
        type: String,
        required:true, //обязательно
        unique:true, // отличный от всех
    },
    password: {
        type:String,
        required: true,
    }
    //img:{}
})

module.exports = model('User', schema)