import bcrypt from 'bcrypt';
import { config } from '../utils/config.js';
import dotenv from 'dotenv';

dotenv.config();

let esAdmin = process.env.IS_ADMIN


export async function verifyPass(username, password) {
    const match = await bcrypt.compare(password, username.password);
    return match;
}

export async function nameUsername(username) {
    const usuario = username.username
    return usuario
}

export async function generateHashPassword(password) {
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
}


export function soloAdmins(req, res, next){
    if (!esAdmin) {
        res.status(403).json({code: 403, msg: `Ruta ${req.baseurl}${req.url} y Metodo ${req.method} No Autorizados`})
    } else {
        next()
    }
}