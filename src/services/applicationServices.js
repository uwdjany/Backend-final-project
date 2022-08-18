import ApplicationModel from "../models/applicationModel";


class ApplicationService{


    // Create Application

    static async submitApplication(req){
        const Applicant = await ApplicationModel.create(req.body)
        return Applicant
    }


    //delete Applicants
    static async deleteApplicant(req){
        
     const Applicant = await ApplicationModel.deleteOne({_id:req.params.id});
     return Applicant;
    }

  
//Get All Application

static async getAllApplication(req){
    const Applicant = await ApplicationModel.find();
    return Applicant;
}

}

export default ApplicationService;