import express from "express";
import Users from '../controllers/userController';

import { userValidate, loginValidate } from '../middlewares/validations/userValidation';


const router = express.Router()
 

router.post('/signup',userValidate, Users.signUp);
router.patch('/verify/:token', Users.confirmEmail);
router.post('/signin', loginValidate, Users.userLogin);

export default router;