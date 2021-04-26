const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()
const app = express()

/* Express middleware */
app.use(cors())
app.use(express.json({ extended: false }))
app.use(express.static(path.resolve(__dirname, 'dist')))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function (req, res) {
    console.log(req.body)
    const query = {
        key: process.env['API_KEY'],
        lang: 'en',
        url: req.body.formText
    }

    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
    const encodedQuery = new URLSearchParams(query).toString()
    const url = baseURL + '?' + encodedQuery

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => response.json())
        .then(result => {
            res.send(result)
        })
        .catch(err => res.status(500).send(err))
})
