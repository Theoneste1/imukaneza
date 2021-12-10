import express from "express";
import OrderItem from '../controllers/orderItem';
import { isLoggedIn } from "../middlewares/authorization/isLoggedIn";
import { isClient } from '../middlewares/authorization/isClient'

import { orderItemValidate } from '../middlewares/validations/orderItem';

const router = express.Router()
 

router.post('/create', isLoggedIn, orderItemValidate, OrderItem.createOrderItem);
router.get('/', isLoggedIn, OrderItem.getAllItem);
router.get('/:id', isLoggedIn, OrderItem.getSingleItem);
router.patch('/:id', isLoggedIn, isClient, OrderItem.updateSingleItem);
router.delete('/:id', isLoggedIn, isClient, OrderItem.deleteSingleItem);

export default router;