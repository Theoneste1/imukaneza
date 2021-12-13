import { OrderItem } from "../models";

export default class OrderItems{
    static async createOrderItem(req, res) {
        try {
            const { itemName, description, quantity, rideId } = req.body;
            const item = await OrderItem.create({itemName, description, quantity, rideId})
            return res.status(201).json({message:'Item created successfully', item})
            
        } catch (error) {
            return res.status(500).json({error: error.message, stacks: error.stack})
        }
    }

    //admin get items
    static async getAllItem(req, res) {
        const { rideId } = req.params
        try {

            const itemExist = await OrderItem.findAll({where: {rideId}});
            if(itemExist.length === 0) return res.status(404).json({error:'no items on this order/ride'})
            return res.status(200).json({message:'Item retrieved successfully', itemExist})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    //A clients get items

    static async getSingleItem(req, res) {
        try {
            const { id } = req.params

            const itemExist = await OrderItem.findOne({where: {id}});

            if(!itemExist) return res.status(404).json({error: 'Order item does not exist'})

            return res.status(200).json({message:'Item retrieved successfully', itemExist})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async updateSingleItem(req, res) {
        try {
            const { id } = req.params

            const itemExist = await OrderItem.findOne({where: {id}});

            if(!itemExist) return res.status(404).json({error: 'Order item does not exist'})

            await OrderItem.update(req.body, {where:{id:id}})
            return res.status(200).json({message:'Item updated successfully'})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async deleteSingleItem(req, res) {
        try {
            const { id } = req.params

            const itemExist = await OrderItem.findOne({where: {id}});

            if(!itemExist) return res.status(404).json({error: 'Order item does not exist'})

            await OrderItem.destroy({where:{id:id}})
            return res.status(200).json({message:'Item delete successfully'})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}