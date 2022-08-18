import MentorModel from "../models/metor";


class MentorServices{
// Login
    static async loginUser(req){
        const user = await MentorModel.findOne({email:req.body.email});
return user;
    }
    
    // Register

   static async createAccount(req){
    const Signup = await MentorModel.create(req.body)
    return Signup
   }

   // Get All Mentor

   static async getAllMentor(req){
    const user = await MentorModel.find()
    return user;
   } 

//Get One By Id

static async getOneById(req){
    const user = await MentorModel.findById({_id:req.params.id},req.body);

    return user;
}


// Update
static async updateMentor(req){
    await MentorModel.findByIdAndUpdate({_id:req.params.id},req.body);
    const user = MentorModel.findOne({_id:req.params.id});
    return user
}

}

export default MentorServices;