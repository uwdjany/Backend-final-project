import MentorServices from "../services/mentorService";
import Response from "../utils/response";

class MentorController{

    static async createAccount(req,res){
        const user = await MentorServices.createAccount(req);
        if(!user){
            return Response.errorMessage(res,"Failed to Register", 400);
        }

        return Response.successMessage(
            res,
            "Successful Register",
            user,
            200

        );
    }

    static async getAllMentor(req,res){
        const user = await MentorServices.getAllMentor(req);
        if(!user){
            return Response.errorMessage(res,"Not Found Mentors",400);
        }

        return Response.successMessage(res, "Mentors Successful Retrieve" , user , 200);
    }

    static async getOneById(req,res){
        const user = await MentorServices.getOneById(req);
        if(!user){
            return Response.errorMessage(res,"Not Found Mentor",400);

        }
        return Response.successMessage(res, "Mentor Successful Retrieve" , user , 200);

    }

static async updateMentor(req,res){
    const user = await MentorServices. updateMentor(req);
    if(!user){
        return Response.errorMessage(res, "Not Found Mentor",400);
    }
    return Response.successMessage(
        res,
        "Mentor Successful to Update",
        user,
        200
    )

    
}





}

export default MentorController