import AttendenceService from "../services/attendenceService";

import Response from "../utils/response";

class AttendenceController{
//Create Countroller

static async createAttendence(req,res){
    const Attendence = await AttendenceService.createAttendence(req);
    if(!Attendence){
        return Response.errorMessage(res,"Not Found", 400);
    }

    return Response.successMessage(
        res,
        "Successful created",
        Attendence,
        200

    );
    }

    //Get All Controller
    static async getAllAttendence(req,res){
        const Attendence = await AttendenceService.getAllAttendence(req);
        if(!Attendence){
            return Response.errorMessage(res,"Not Found",400);
        }
        return Response.successMessage(
            res,
            "Successfully Retrieve",
            Attendence,
            200
        )
    }

//Delete Controller

static async deleteAttendence(req,res){
    const Attendence = await AttendenceService.deleteAttendence(req);
    if(!Attendence){
        return Response.errorMessage(res,"Not Found",400);
    }
    return Response.successMessage(
        res,
        "Successfully Retrieve",
        Attendence,
        200
    )
}

}

export default AttendenceController;