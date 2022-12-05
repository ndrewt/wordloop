require("dotenv").config()
const express = require('express')
    //routes
const AuthRouter = require('./routes/auth')
const LangRouter = require('./routes/languages')
const WordsRouter = require('./routes/words')
const ListsRouter = require('./routes/words-lists')
const ListWordsRouter = require('./routes/words-lists-words')
const TgRouter = require('./routes/telegram')
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
            version: '1.0.1'
        },
        servers: [{
            url: "http://localhost:3000"
        }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
    },
    apis: ['./src/middleware/swagger.js']
}

const swaggerDocs = swaggerJsDoc(swaggerSpec)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())

app.use('/api/users', AuthRouter)

app.use('/api/tg-data', TgRouter)

app.use('/api/languages', LangRouter)

app.use('/api/words', WordsRouter)

app.use('/api/words-lists', ListsRouter)

app.use('/api/words-lists-words', ListWordsRouter)


// app.use('/api', (req, res, next) => {
//     res.status(404).json({
//         sucess: 0,
//         message: 'Invalid route.'
//     })
// })

app.listen(process.env.APP_PORT || '3000', () => {
    console.log('Server has been started on port:', process.env.APP_PORT || 3000)
})

module.exports = app