import CourseModel from "../models/courseModel";

class CourseServise{


    //Create Course 

    static async createCourse(req){
        const Course = await CourseModel.create(req.body)
        return Course
    }

    // Get All Courses

    static async getAllCourses(req){
        const course = await CourseModel.find()
        return course;
    }

    //Get One By Id

    static async getOneById(req){
        const course = await CourseModel.findById()
        return course

    }

    //Delete one by id


static async deleteCourse(req){
    const Course = await CourseModel.deleteOne({_id:req.params.id});
    return Course;
}

// Update By id

static async updateCourse(req){
    await CourseModel.findByIdAndUpdate({_id:req.params.id},req.body);
    const Course = CourseModel.findOne({_id:req.params.id});
    return Course;
}

}

export default CourseServise