import MentorModel from "../models/metor";

class DataChecker{
    static validateEmailDuplication = async (req, res,next) => {
      const email = await MentorModel.findOne({email: req.body.email});
      if (!email){
        return next();
      }  
      return res.status(404).json({
        status:404,
        message:"Email already exit"
      })
    }

    static checkAge=(req,res,next) =>{
        if(req.body.age < 15){
            return res.status(404).json({
                status:404,
                message:"you are under Age.no Access"
            })
        }
    }
}

export default DataChecker