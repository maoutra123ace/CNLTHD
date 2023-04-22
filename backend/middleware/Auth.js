import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication."})

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, account) => {
            if(account) return res.status(400).json({msg: "Invalid Authentication."})

            req.account = account
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
export default auth;