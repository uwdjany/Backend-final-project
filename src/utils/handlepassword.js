import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config({path:"../../"})

class Password{
    //return cypfertext of password 

    static encryptPassword(pswd){

        return bcrypt.hashSync(pswd, parseInt(process.env.SALT))
    }
//FUNCTION TO RETURN IF PASSWORD IS MATCHING

static checkPassword(hashedPswd,normalPswd){
    return bcrypt.compareSync(normalPswd,hashedPswd)
}
}

export default Password