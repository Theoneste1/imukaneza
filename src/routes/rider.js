import express from "express";
import Riders from '../controllers/riderController';



const router = express.Router()

router.post('/create', Riders.createRider);
router.patch('/update/:id',Riders.updateRider);
router.get('/findOne/:id',Riders.findOneRide);
router.get('/findAll',Riders.findAllRides);
router.delete('/delete/:id',Riders.deleteRide);
export default router;