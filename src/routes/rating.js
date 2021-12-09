import express from "express";
import Ratings from '../controllers/rating';
import { isLoggedIn } from "../middlewares/authentication/isLoggedIn";

import { ratingValidate } from '../middlewares/validations/ratingVal';


const router = express.Router()
 

router.post('/create', isLoggedIn, ratingValidate, Ratings.createRating);
router.get('/', isLoggedIn, Ratings.getRatings);
router.get('/:id', isLoggedIn, Ratings.getSingleRating);
router.patch('/:id', isLoggedIn, Ratings.updateSingleRating);
router.delete('/:id', isLoggedIn, Ratings.deleteSingleRating);

export default router;