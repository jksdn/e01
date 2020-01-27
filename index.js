const fs = require('fs')
const express = require('express')

// 

const app = express()

const _t = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, { encoding: 'utf-8' }))
const _u = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, { encoding: 'utf-8' }))

app.get('/', (request, response) => response.send('/'))
app.get('/tours', (request, response) => response.json({ _d: _t }))
app.get('/users', (request, response) => response.json({ _d: _u }))

app.post('/tours', (request, response) => response.send('/tours'))
app.post('/users', (request, response) => response.send('/users'))

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`)
})