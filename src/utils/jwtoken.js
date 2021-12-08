import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

import { User } from '../models'
config();

export const hashpassword = (password) => bcrypt.hashSync(password, 10);

export const jswtToken = ({...payload}) => jwt.sign({payload}, process.env.SECRET,{expiresIn:'24h'});

export const verifyToken = (token) => jwt.verify(token, process.env.SECRET);
    
export const userExist = async (email) => await User.findOne({ where: { email: email } });

export const comparePassword = (password,userPassword)=>bcrypt.compareSync(password, userPassword);