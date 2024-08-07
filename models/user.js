const mongoose=  require('mongoose');

const createUser = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            
        },
        password:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        profession:{
            type:String,
            required:true,
        },
    }
);

// export the models
module.exports = mongoose.model("User",createUser);