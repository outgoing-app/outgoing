const express = require('express')
const {
    body,
    query,
    matchedData,
    validationResult
} = require('express-validator')
const path = require('path')
const bodyParser = require('body-parser')
const data = require('../data/dummyData')

const app = express()
const port = 3000

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'public')))

// Returns all events
app.get('/events', (req, res) => {
    try {
        const response = data.events
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

// Returns all groups
app.get('/groups', async (req, res) => {
    try {
        const response = data.groups
        console.log(response)
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

// Returns all users
app.get('/users', async (req, res) => {
    try {
        const response = data.users
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})