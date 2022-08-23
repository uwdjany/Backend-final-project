import {check,validationResult} from "express-validator";

class Validator{
    static validateInput = (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage=errors.errors.map((err) =>err.msg);
            return res.status(400).json({
                status:400,
                message:errorMessage
            })
        }
        return next();
    }
    static newAccountRules(){
        return[ 
    check("email","please your email is Invalid").isEmail(),
    check("firstName","please Your name have special charcter").isAlpha(), 
    check("lastName","please your last name have special charcter").isAlpha(),
    check("gender","gender is Invalid").isIn(['male','female']),
    check("phoneNumber","Your phone number is invalid").isMobilePhone(),
    // check("age","age should be integer").isInt(),
    check("password","password must be strong").isStrongPassword()
        ]

}
}
export default Validator;