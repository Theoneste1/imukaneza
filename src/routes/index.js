import express from "express";
import userRouter from './user'
import itemRouter from './orderItem'
import serviceRouter from './service'
import transactionRouter from './transaction'
import ratingRouter from './rating'
import riderRouter from './rider';

const router = express.Router()
router.get('/', (req, res) => res.status(200).json({message: 'Welcome to Imukaneza system'}));
router.use('/users', userRouter);
router.use('/riders',riderRouter)

// order item
router.use('/orderitem', itemRouter);
// service
router.use('/services', serviceRouter);

// transaction
router.use('/transactions', transactionRouter)

// rating
router.use('/rating', ratingRouter)

export default router