import express from "express";
import { isLoggedIn } from "../middlewares/authorization/isLoggedIn";
import Locations from '../controllers/location';



const router = express.Router()

router.post('/create',isLoggedIn, Locations.creataLocation);
router.get('/',isLoggedIn, Locations.getAllLocation);

export default router;