import Response from "../utils/response";
import TokenAuth from "../utils/token";

const VerifyToken = async(req,res,next) =>{
    const token = req.header("x-auth-token");
    if(!token){
        return Response.errorMessage(res,"No token",403);
    }try{
        const user = TokenAuth.decodeToken(token);
        req.user=user;
        return next();

    }catch(err){
        console.log("<><><><><>>>>>",err);

    }
}

export default VerifyToken;