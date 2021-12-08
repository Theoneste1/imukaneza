import express from "express";
import userRouter from './user'
import itemRouter from './orderItem'

const router = express.Router()
router.get('/', (req, res) => res.status(200).json({message: 'Welcome to Imukaneza system'}));
router.use('/users', userRouter);

// order item
router.use('/orderitem', itemRouter);

export default router