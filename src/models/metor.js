import mongoose from 'mongoose';

//Schema of mentor

const mentorSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    phoneNumber:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
gender:{
    type:String,
    enum:["male","female","other"],
},

role:{
    type:String,
    enum:["user","admin"],
    default:"user",
},
language:{
    type:String,
    enum:["html","css","js","react js","node js"],

}
},{timestamps:true});

const mentor=mongoose.model('Mentor',mentorSchema);

export default mentor;