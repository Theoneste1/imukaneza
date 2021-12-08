
export const isLoggedIn = (req,res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        if (!bearerToken) return res.status(401).json({ status: 401, error: "Unauthorized, Please login!" });
        
        return next();
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
}
