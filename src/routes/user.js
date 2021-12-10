import express from "express";
import Users from '../controllers/userController';

import { userValidate, loginValidate } from '../middlewares/validations/userValidation';
import { changePassValidate } from "../middlewares/validations/changePassword";
import { isLoggedIn } from "../middlewares/authorization/isLoggedIn";
import { isSuperAdminOrSubAdmin } from "../middlewares/authorization/isSuperAdminOrAdmin";


const router = express.Router()
 

router.post('/signup',userValidate, Users.signUp);
router.patch('/verify/:token', Users.confirmEmail);
router.post('/signin', loginValidate, Users.userLogin);
router.get('/usersriders', isLoggedIn, isSuperAdminOrSubAdmin, Users.getAllRiders)
router.patch('/changerole/:id', isLoggedIn, isSuperAdminOrSubAdmin, Users.changeRole)
router.get('/',isLoggedIn, Users.getAllUsers);
router.get('/:id', isLoggedIn, Users.getSingleUser)
router.patch('/changepassword', isLoggedIn, changePassValidate, Users.changePassword)


export default router;