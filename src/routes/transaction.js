import express from "express";
import Transactions from '../controllers/transaction';
import { isLoggedIn } from "../middlewares/authentication/isLoggedIn";

import { transactionValidate } from '../middlewares/validations/transactionVal';


const router = express.Router()
 

router.post('/create', isLoggedIn, transactionValidate, Transactions.createTransaction);
router.get('/', isLoggedIn, Transactions.getTransactions);
router.get('/:id', isLoggedIn, Transactions.getSingleTransaction);
router.patch('/:id', isLoggedIn, Transactions.updateSingleTransaction);
router.delete('/:id', isLoggedIn, Transactions.deleteSingleTransaction);

export default router;