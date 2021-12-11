import {Transaction, User } from '../models'
import { verifyToken } from '../utils/jwtoken';

export default class Transactions{
    static async createTransaction(req, res){
        const { rideId, price } = req.body;
        try {
            const userToken = req.headers.authorization;
            const realToken = userToken.split(" ")[1];
            const userDecodedData = verifyToken(realToken);
            
            const loggedUser = await User.findOne({ where: { email: userDecodedData.payload.email } });

            const newTransaction = await Transaction.create({ rideId, relocator:loggedUser.id, price, status:'pending' })
            return res.status(201).json({message: 'transaction created successfully', transaction:newTransaction})
            
        } catch (error) {
            return res.status(500).json({error:error.message})
        }

    }

    static async getTransactions(req, res){
        try {
            const transactions = await Transaction.findAll()
            if(transactions.length === 0) return res.status(404).json({error:'no transaction made!'})
            return res.status(200).json({message: 'transaction retrieved successfully', transactions})
            
        } catch (error) {
            return res.status(500).json({error:error.message})
        }

    }

      static async getSingleTransaction(req, res) {
        try {
            const { id } = req.params

            const transactionExist = await Transaction.findOne({where: {id}});

            if(!transactionExist) return res.status(404).json({error: 'Transaction does not exist'})

            return res.status(200).json({message:'transaction retrieved successfully', transactionExist})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async updateSingleTransaction(req, res) {
        try {
            const { id } = req.params

            const transactionExist = await Transaction.findOne({where: {id}});

            if(!transactionExist) return res.status(404).json({error: 'Transaction does not exist'})

            await Transaction.update(req.body, {where:{id:id}})
            return res.status(200).json({message:'Transaction updated successfully'})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    static async deleteSingleTransaction(req, res) {
        try {
            const { id } = req.params

            const transactionExist = await Transaction.findOne({where: {id}});

            if(!transactionExist) return res.status(404).json({error: 'Transaction does not exist'})

            await Transaction.destroy({where:{id:id}})
            return res.status(200).json({message:'transaction delete successfully'})
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}