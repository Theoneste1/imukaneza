import express from "express";
import userRouter from './user'

const router = express.Router()
router.get('/', (req, res) => res.status(200).json({message: 'Welcome to Imukaneza system'}));
router.use('/users', userRouter);

export default router