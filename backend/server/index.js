const express = require('express')
const {
    body,
    query,
    matchedData,
    validationResult
} = require('express-validator')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('../database/mongoConnect')
const db = require('../database/database')

const app = express()
const port = 3000

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE']
}))

// Establish database connection
connectDB()

// Retrieve all existing users
app.get('/users', async (req, res) => {
    console.log('retrieving users...')
    try {
        const response = await db.getUsers()
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

// Add a new event to the database
app.post('/event', async (req, res) => {
    console.log('adding an event...')
    try {
        const response = await db.addEvent(req.body.event)
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

// Retrieve all existing events
app.get('/events', async (req, res) => {
    console.log('getting all events...')
    try {
        const response = await db.getEvents()
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

// Retrieve all pending events
app.get('/events/pending', async (req, res) => {
    console.log('getting all pending events...')
    try {
        const response = await db.getPendingEvents()
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

// Retrieve all pending events
app.get('/events/confirmed', async (req, res) => {
    console.log('getting all confirmed events...')
    try {
        const response = await db.getConfirmedEvents()
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

// Delete an event by event id
app.delete('/event/:id', async (req, res) => {
    console.log('deleting an event...')
    try {
        const response = await db.deleteEvent(req.params.id)
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

// Confirm an event by event id
app.post('/event/confirm/:id', async (req, res) => {
    console.log('confirm an event...')
    try {
        const response = await db.confirmEvent(req.params.id)
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

// Add a new group to the database
app.post('/group', async (req, res) => {
    console.log('adding a group...')
    try {
        const response = await db.addGroup(req.body.group)
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

// Retrieve all existing groups
app.get('/groups', async (req, res) => {
    console.log('getting all groups...')
    try {
        const response = await db.getGroups()
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

// Delete a group by group id
app.delete('/group/:id', async (req, res) => {
    console.log('deleting a group...')
    try {
        const response = await db.deleteGroup(req.params.id)
        if (response) {
            return res.send(response)
        } else {
            return res.status(500).send({ error: 'Unexpected response' })
        }
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})