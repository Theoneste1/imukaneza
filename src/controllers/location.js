import { Location } from '../models'

export default class Locations{
    static async creataLocation(req, res){
        const  { name } = req.body;
        try {
            const locationExist = await Location.findOne({where: {name: name}});
            
            if(locationExist) return res.status(409).json({error: 'Location already exist'})
            
            const newLocation = await Location.create({name})
            return res.status(201).json({message:'location created successfully', location: newLocation})
            
        } catch (error) {
            return res.status(500).json({error:error.message, stacks:error.stack})
        }
    }

    static async getAllLocation(req, res){
        try {
            const locationExist = await Location.findAll({});
            
            if(locationExist.length ===0) return res.status(409).json({error: 'No location exist'})
            return res.status(201).json({message:'location created successfully', location: locationExist})
            
        } catch (error) {
            return res.status(500).json({error:error.message, stacks:error.stack})
        }
    }
}