require("dotenv").config()
const express = require('express')
const authRouter = require('./routes/auth')
    //swagger
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()

const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Wordloop API',
            description: 'Wordloop API Information',
            version: '1.0.0'
        },
        servers: [{
            url: "http://localhost:3000"
        }]
    },
    apis: ['./middleware/swagger.js']
}

const swaggerDocs = swaggerJsDoc(swaggerSpec)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())

app.use('/api/users', authRouter)

app.use('/api', (req, res, next) => {
    res.json('Welcome to wordloop API!!!')
})

app.listen(process.env.APP_PORT || '3000', () => {
    console.log('Server has been started on port:', process.env.APP_PORT || 3000)
})