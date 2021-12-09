import {Rating } from '../models'

export default class Ratings{
    static async createRating(req, res){
        try {
            const { rate, relocator, description } = req.body;
            const newRating = await Rating.create({ rate, relocator, description })
            return res.status(201).json({message: 'Rating created successfully', newRating})
            
        } catch (error) {
            return res.status(500).json({error:error.message})
        }

    }

    static async getRatings(req, res){
        try {
            const ratings = await Rating.findAll()
            if(ratings.length === 0) return res.status(404).json({error:'no rating made!'})
            return res.status(200).json({message: 'Ratings retrieved successfully', ratings})
            
        } catch (error) {
            return res.status(500).json({error:error.message})
        }

    }

      static async getSingleRating(req, res) {
        try {
            const { id } = req.params

            const ratingExist = await Rating.findOne({where: {id}});

            if(!ratingExist) return res.status(404).json({error: 'Rating does not exist'})

            return res.status(200).json({message:'Rating retrieved successfully', ratingExist})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async updateSingleRating(req, res) {
        try {
            const { id } = req.params

            const ratingExist = await Rating.findOne({where: {id}});

            if(!ratingExist) return res.status(404).json({error: 'Rating does not exist'})

            await Rating.update(req.body, {where:{id:id}})
            return res.status(200).json({message:'Rating updated successfully'})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async deleteSingleRating(req, res) {
        try {
            const { id } = req.params

            const ratingExist = await Rating.findOne({where: {id}});

            if(!ratingExist) return res.status(404).json({error: 'Rating does not exist'})

            await Rating.destroy({where:{id:id}})
            return res.status(200).json({message:'Rating delete successfully'})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}