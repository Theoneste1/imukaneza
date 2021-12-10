import { verifyToken } from "../../utils/jwtoken";

export const isSuperAdmin = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization
        if (!bearerToken) return res.status(401).json({status:401,error:"Unauthorized, Please login!"});
        const token = bearerToken.split(" ")[1]
        const decoded = await verifyToken(token)
        if (decoded.userAccess !== "superAdmin" || decoded.userAccess !== "subAdmin") return res.status(403).json({ status: 403, error: "service denied!" });
        return next()
    } catch (error) {
        return res.status(500).json({error: error.message})
    }      
}