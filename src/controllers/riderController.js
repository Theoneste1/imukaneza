
import {Rider, User, OrderItem, Location} from '../models'
import {userExist, verifyToken} from '../utils/jwtoken'
import { Op } from 'sequelize'


export default class Rides{
  static async createRide(req, res) {
    try {
      const {riderNumber,rider,agentInCharge,
        departure,destination,status,price,discription} = req.body;
        const userToken = req.headers.authorization;
        const realToken = userToken.split(" ")[1];
        const userDecodedData = verifyToken(realToken);
        
        const loggedUser = await User.findOne({ where: { email: userDecodedData.payload.email } });

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
      const existRider = await Rider.findOne({ where: { id: req.params.id},include:["OrderItems"] });

      if(!existRider) return res.status(400).json({status:400,error:"This Rider is not exist"});
      const departure = await Location.findOne({where:{id: existRider.departure}})
      const destination = await Location.findOne({where:{id: existRider.destination }})
      if(existRider){
        return res.status(200).json({status:200,existRider:existRider, message:"A rider is successfuly found", departure, destination})
      }
        
    } catch (error) {
      return res.status(500).json({error:error.message, stacks:error.stack});
    }
  }

  static async personalRide(req, res) {
    try {
      let departure;
      let destination;
      const userToken = req.headers.authorization;
      const realToken = userToken.split(" ")[1];
      const userDecodedData = verifyToken(realToken);
     
      const loggedUser = await userExist(userDecodedData.payload.email);

      const existRider = await Rider.findAll({ where: {relocator:loggedUser.id},include:["OrderItems"] });
      
      if(existRider.length === 0) return res.status(400).json({status:400,error:"You don't have any orders yet!"});
      
      existRider.map(async (order) => {
       departure = await Location.findOne({where:{id: order.departure}})
       destination = await Location.findOne({where:{id: order.destination }})
      })
      
      return res.status(200).json({status:200,existRider:existRider, message:"A rider is successfuly found", departure, destination})
    
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

      const userToken = req.headers.authorization;
      const realToken = userToken.split(" ")[1];
      const userDecodedData = verifyToken(realToken);
      
      const loggedUser = await User.findOne({ where: { email: userDecodedData.payload.email } });
      const existRider = await Rider.findOne({ where: { id: req.params.id,relocator: loggedUser.id} });

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