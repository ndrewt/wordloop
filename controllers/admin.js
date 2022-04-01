exports.getUserById = (req, res, next) => {
    const id = req.params.user_id
    User.getUserById(id)
        .then(user => {
            if (!user) {
                return res.json({
                    success: 0,
                    message: "Record not found."
                })
            }
            return res.json({
                success: 1,
                data: user
            })
        })
        .catch(err => {
            console.log(err)
            return
        })
}

exports.getUsers = (req, res, next) => {
    User.getUsers()
        .then(([result]) => {
            return res.json({
                success: 1,
                data: result
            })
        })
        .catch(err => {
            console.log(err)
            return
        })
}

exports.updateUser = (req, res, next) => {
    const body = req.body
    const salt = genSaltSync(10)
    body.user_password = hashSync(body.user_password, salt)
    User.updateUser(body)
        .then(result => {
            if (!result) {
                return res.json({
                    success: 0,
                    message: "Failed to update user."
                })
            }
            return res.json({
                success: 1,
                message: "Updated successfully."
            })
        })
        .cath(err => {
            console.log(err)
            return
        })
}

exports.deleteUser = (req, res, next) => {
    const data = req.body
    User.deleteUser(data)
        .then(result => {
            if (!result) {
                return res.json({
                    success: 0,
                    message: "Record Not Found."
                })
            }
            return res.json({
                success: 1,
                message: "User deleted successfully."
            })
        })
        .catch(err => {
            console.log(err)
            return
        })
}