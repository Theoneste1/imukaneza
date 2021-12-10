
import {Rider} from '../models'
import {verifyToken} from '../utils/jwtoken'

export default class Rides{
  static async createRide(req, res) {
    try {
      const {riderNumber,rider,relocator,agentInCharge,
        departure,destination,status,price,discription} = req.body;
        const userToken = req.headers.authorization;
        const realToken = userToken.split(" ")[1];
        const userDecodedData = verifyToken(realToken);
  
        const loggedUser = await User.findOne({ where: { email: userDecodedData.email } });


          const a_ride = await Rider.create({riderNumber,rider,relocator:loggedUser.id,agentInCharge,
            departure,destination,status,price,discription});
          
        return res.status(201).json({status:201,a_ride, message: 'rider is successfully created',

        });
    } catch (error) {
      return res.status(500).json({error:error.message, stacks:error.stack});
    }
  }
  static async updateRide(req, res) {
    try {
      const existRider = await Rider.findOne({ where: { id: req.params.id} });

      if(!existRider) res.status(400).json({status:400,error:"This Rider is not exist"});
      
      if(existRider){
        existRider.update({
          riderNumber:req.riderNumber,
          rider:req.rider,
          relocator:req.relocator,
          agentInCharge:req.agentInCharge,
          departure:req.departure,
          destination:req.destination,
          status:req.status,
          price:req.price,
          discription:req.discription
        })
        return res.status(200).json({status:200,rider:existRider, message:"This rider updated successfully"})
      }
        
    } catch (error) {
      return res.status(500).json({error:error.message, stacks:error.stack});
    }
  }

  static async findOneRide(req, res) {
    try {
      const existRider = await Rider.findOne({ where: { id: req.params.id} });

      if(!existRider) res.status(400).json({status:400,error:"This Rider is not exist"});
      
      if(existRider){
        return res.status(200).json({status:200,existRider:existRider, message:"A rider is successfuly found"})
      }
        
    } catch (error) {
      return res.status(500).json({error:error.message, stacks:error.stack});
    }
  }

  static async findAllRides(req, res) {
    try {
      const allRiders = await Rider.findAll();

      if(allRiders.length===0) return res.status(400).json({status:400,message:"Not riders"})
      
      else{
        return res.status(200).json({status:200,allRiders, message:"The following are all riders"})
      }
        
    } catch (error) {
      return res.status(500).json({error:error.message, stacks:error.stack});
    }
  }

  static async deleteRide(req, res) {
    try {
      const existRider = await Rider.findOne({ where: { id: req.params.id} });

      if(!existRider) res.status(400).json({status:400,error:"This Rider is not yet exist"});
      
      if(existRider){
        existRider.destroy()
        return res.status(200).json({status:200, message:"A rider is successfuly deleted"})
      }
        
    } catch (error) {
      return res.status(500).json({error:error.message, stacks:error.stack});
    }
  }

}