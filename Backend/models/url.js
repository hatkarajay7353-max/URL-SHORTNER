const mongoose=require('mongoose');

const urlSchema=mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        requred:true,
        unique:true
    },
    visitHistory:[
        {
            timestamp:{
                type:Number
            }
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const URL=mongoose.model("Url",urlSchema);

module.exports=URL;