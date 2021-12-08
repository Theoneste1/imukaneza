
  
import { User } from '../models'
import { hashpassword, verifyToken, userExist, jswtToken , comparePassword} from '../utils/jwtoken';
import { sendingVerificationEMail } from '../utils/sendEmail';


export default class Users {
  static async signUp(req, res) {
    try {
      const { firstName,lastName,phoneNumber,userAccess,email,homeAddress, password } = req.body;
      const isUserTableEmpty = await User.findAll();
     if(isUserTableEmpty.length === 0) {

          const hashedPassword = hashpassword(password);
          const user = await User.create({firstName,lastName,phoneNumber,userAccess:'superAdmin',email,homeAddress,password: hashedPassword});
          delete user["password"];
        sendingVerificationEMail(email,user.id)
        return res.status(201).json({status:201,user:user, message: 'user is successfully created check your to verify your account!',

        });
    }else {
        const existUser = await userExist(email)
        if (existUser) return res.status(409).json({error:'user already exists'});
        const hashedPassword = hashpassword(password);
        const user = await User.create({firstName,lastName,phoneNumber,userAccess,email,homeAddress,password: hashedPassword, status:'activated'});
        user.password === ''

        sendingVerificationEMail(email)
        return res.status(201).json({status:201,user:user, message: 'user is successfully created check your to verify your account!'})
      } 
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async confirmEmail (req, res){
    try {
      const {token} = req.params;
      const userEmail = await verifyToken(token);

      const isExist = await userExist(userEmail.payload.email)

      await User.update({verified:"true"},{where:{email:isExist.email}});
      return res.status(200).json({statua:200, message:"account verified successfully"})
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  
  }

  static async userLogin (req, res) {
    const{email, password } = req.body;
  
    try {
      // check if user is exist in database
      const isUserExist = await userExist(email);
      if (!isUserExist) return res.status(404).json({status:404, message:`You don't have account with this email ${email}!`});
      if(isUserExist.verified === false) return res.status(400).json({status:400, message:`Your account is not activated!`});
      const comparedPassword = comparePassword(password, isUserExist.password);
    
      if(!comparedPassword) return res.status(400).json({status:400, message:"Password incorrect!"}) 
      const tokenPayload = {email:isUserExist.email, userAccess:isUserExist.userAccess, id:isUserExist.id};
  
      // generate user token
      const token = jswtToken(tokenPayload)
      // delete isUserExist.password;
      isUserExist.password = '';
      return res.status(200).json({status:200, message:"Login successful", token, profile: isUserExist})
      
    } catch (error) {
      return res.status(400).json({message: error.message, stack: error.stack});
    }
  }
}