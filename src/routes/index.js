import express from "express";
import userRouter from './user'
import itemRouter from './orderItem'
import serviceRouter from './service'
import transactionRouter from './transaction'

const router = express.Router()
router.get('/', (req, res) => res.status(200).json({message: 'Welcome to Imukaneza system'}));
router.use('/users', userRouter);

// order item
router.use('/orderitem', itemRouter);
// service
router.use('/services', serviceRouter);

// transaction
router.use('/transactions', transactionRouter)

export default router