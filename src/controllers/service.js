import { Service } from '../models'

export default class Services{
    static async createService(req, res) {
        try {
            const { name, description } = req.body;
            const service = await Service.create({name, description, status:'pending'})
            return res.status(201).json({message:'Service created successfully', service})
            
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async getAllservice(req, res) {
        try {

            const serviceExist = await Service.findAll({});

            return res.status(200).json({message:'Item retrieved successfully', serviceExist})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async getSingleService(req, res) {
        try {
            const { id } = req.params

            const serviceExist = await Service.findOne({where: {id}});

            if(!serviceExist) return res.status(404).json({error: 'Order item does not exist'})

            return res.status(200).json({message:'Item retrieved successfully', serviceExist})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async updateSingleService(req, res) {
        try {
            const { id } = req.params

            const serviceExist = await Service.findOne({where: {id}});

            if(!serviceExist) return res.status(404).json({error: 'service does not exist'})

            await Service.update(req.body, {where:{id:id}})
            return res.status(200).json({message:'service updated successfully'})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async deleteSingleService(req, res) {
        try {
            const { id } = req.params

            const serviceExist = await Service.findOne({where: {id}});

            if(!serviceExist) return res.status(404).json({error: 'Service does not exist'})

            await Service.destroy({where:{id:id}})
            return res.status(200).json({message:'service delete successfully'})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}