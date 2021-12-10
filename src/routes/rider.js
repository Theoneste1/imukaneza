import express from "express";
import { isLoggedIn } from "../middlewares/authentication/isLoggedIn";
import Rides from '../controllers/riderController';



const router = express.Router()

router.post('/create',isLoggedIn, Rides.createRide);
router.patch('/update/:id',isLoggedIn, Rides.updateRide);
router.get('/findOne/:id',isLoggedIn, Rides.findOneRide);
router.get('/findAll',isLoggedIn, Rides.findAllRides);
router.delete('/delete/:id',isLoggedIn, Rides.deleteRide);
export default router;