import express from "express";
import OrderItem from '../controllers/orderItem';
import { isLoggedIn } from "../middlewares/authentication/isLoggedIn";

import { orderItemValidate } from '../middlewares/validations/orderItem';

const router = express.Router()
 

router.post('/create', isLoggedIn, orderItemValidate, OrderItem.createOrderItem);
router.get('/', isLoggedIn, OrderItem.getAllItem);
router.get('/:id', isLoggedIn, OrderItem.getSingleItem);
router.patch('/:id', isLoggedIn, OrderItem.updateSingleItem);
router.delete('/:id', isLoggedIn, OrderItem.deleteSingleItem);

export default router;