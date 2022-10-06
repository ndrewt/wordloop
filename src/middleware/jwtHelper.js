const jwt = require('jsonwebtoken')

module.exports = {
    is_auth: (req, res, next) => {
        let token = req.get('authorization')
        if (token) {
            token = token.slice(7)
            jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
                if (err) {
                    console.log(err)
                    return res.status(401).json({
                        success: 0,
                        message: "Invalid token."
                    })
                }
                next()
            })
        } else {
            return res.status(403).json({
                success: 0,
                message: "Access denied! You need to be authorized."
            })
        }
    },
    decodeId: (req, res, next) => {
        let token = req.get('authorization').slice(7)
        const decoded = jwt.decode(token).data.user_id
        return decoded
    },
    get_token: (req, res, next) => {
        let token = req.get('authorization')
        return token.slice(7)
    }
}