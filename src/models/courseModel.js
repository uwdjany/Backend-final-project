import mongoose from "mongoose";

// Schema of courses

const courseSchema = mongoose.Schema({
    courseTitle:String,
    courseDuration:{
        startAt:Date,
        endAt:Date,
    },
    description:String,
    createdBy:{
        type:mongoose.Schema.ObjectId,
        ref:"Mentor"
    },
    topic:{
        type:String,
        unique:true,
        required:true

    }

},{timestamps:true});

courseSchema.pre(/^find/,function(next){
    this.populate({
        path:"createdBy",
        select:"firstName lastName email phoneNumber role"
    });
    next();
})

const Course = mongoose.model('Course' , courseSchema)

export default Course;