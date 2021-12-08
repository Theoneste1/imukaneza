import express from "express";
import Services from '../controllers/service';
import { isLoggedIn } from "../middlewares/authentication/isLoggedIn";

import { serviceValidate } from '../middlewares/validations/serviceVal';


const router = express.Router()
 

router.post('/create', isLoggedIn, serviceValidate, Services.createService);
router.get('/', isLoggedIn, Services.getAllservice);
router.get('/:id', isLoggedIn, Services.getSingleService);
router.patch('/:id', isLoggedIn, Services.updateSingleService);
router.delete('/:id', isLoggedIn, Services.deleteSingleService);

export default router;