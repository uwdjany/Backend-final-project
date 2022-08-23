import CourseService from "../services/courseServices";
import Response from "../utils/response";

class CourseController{

    //create Course Controller


    static async createCourse(req,res){
        const Course = await CourseService.createCourse(req);
        if(!Course){
            return Response.errorMessage(res,"Not Found", 400);
        }

        return Response.successMessage(
            res,
            "Successful created",
            Course,
            200

        );
        }

        //Get All course Controller

static async getAllCourses(req,res){
    const Course = await CourseService.getAllCourses(req);
    if(!Course){
        return Response.errorMessage(res,"Not Found",400);
    }
    return Response.successMessage(
        res,
        "Successfully Retrieve",
        Course,
        200
    )
}




}


export default CourseController