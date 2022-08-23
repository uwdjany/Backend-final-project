import mongoose from "mongoose";

//Schema Of Attendence

const attendenceSchema = new mongoose.Schema(
    {
        names:String,
        email:{
            type:String,
            unique:true,
            required:true
        },
        date:{
            dateAt: Date,
        },
        language:[String],
       
        role:{
            type:String,
            enum:["mentor","admin"],
            default:"mentor"

        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Mentor",

        }
    },{timestamps:true});
    attendenceSchema.pre(/^find/,function(next){
        this.populate({
            path:"createdBy",
            select:"email names"
        })
        next();
    })

    const Attendence = mongoose.model("attendence",attendenceSchema);

    export default Attendence;