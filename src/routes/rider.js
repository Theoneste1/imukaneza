import express from "express";
import { isLoggedIn } from "../middlewares/authorization/isLoggedIn";
import {isClient} from "../middlewares/authorization/isClient";
import {isSuperAdminOrSubAdmin} from "../middlewares/authorization/isSuperAdminOrAdmin"
import Rides from '../controllers/riderController';



const router = express.Router()

router.post('/create',isLoggedIn, Rides.createRide);
router.get('/personalRides', isClient, Rides.personalRide);
router.get('/findAll',isLoggedIn, isSuperAdminOrSubAdmin,Rides.findAllRides);
router.patch('/update/:id',isLoggedIn, Rides.updateRide);
router.get('/findOne/:id',isLoggedIn, Rides.findOneRide);
router.delete('/delete/:id',isLoggedIn, Rides.deleteRide);
export default router;