import Response from "../utils/response";

const VerifyAccess = function(requiredRole){
    return async (req,res,next) =>{
        try{
            
            //const{role:role}=req.user:
            const role=req.user.role;

            if(requiredRole!==role){
                return Response.errorMessage(res, "you are not authorized",403);
            }
            return next()
        }catch(err){
            console.log(err);
        }
    }
}

export default VerifyAccess