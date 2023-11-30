const mongoose=require('mongoose');

const carsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true,
    },
    model:{
        type:String
    },
    reg_number:{
        type:String,
        // required:true,
        // validate: {
        //     validator: function (v) {
        //         return v.toString().length >= 10;
        //     },
        //     message: 'Mobile number must have at least 10 digits'
        // }
    },
    color:{
        type:String,
    },
    seating_capacity:{
        type:Number,
    }

})

module.exports=mongoose.model("Cars",carsSchema);