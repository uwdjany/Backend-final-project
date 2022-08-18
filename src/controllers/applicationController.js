import ApplicationService from "../services/applicationServices";
import Response from "../utils/response";

class ApplicationController{


    // Submit Controller

    static async submitApplication(req,res){
        const Applicant = await ApplicationService.submitApplication(req);
        if(!Applicant){
            return Response.errorMessage(res,"Failed to Apply", 400);
        }

        return Response.successMessage(
            res,
            "Successful Application",
            Applicant,
            200

        );
        }


        //Delete Application

        static async deleteApplicant(req,res){
            const Applicant = await ApplicationService.deleteApplicant(req);
            if(!Applicant){
                return ResizeObserver.status(404).json({
                    message:"Deleted Successful",
                })
            }
            return res.status(201).json({message:"Deleted Successful",data:Applicant})
        } 


        //Get ALL Application 
static async getAllApplication(req,res){
    const Applicant = await ApplicationService.getAllApplication(req);
    if(Applicant){
        return Response.errorMessage(res,"Not Found Appication", 400);

    }
    return Response.successMessage(
        res,
        "Successful Application",
        Applicant,
        200

    );
}
        
    }



export default ApplicationController