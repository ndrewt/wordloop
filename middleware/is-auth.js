const jwt = require('jsonwebtoken')

module.exports = {
    is_auth: (req, res, next) => {
        let token = req.get('authorization')
        if (token) {
            token = token.slice(7)
            jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        success: 0,
                        message: "Invalid token."
                    })
                }
                next()
            })
        } else {
            res.status(403).json({
                success: 0,
                message: "Access denied! You need to be authorized."
            })
        }
    }
}