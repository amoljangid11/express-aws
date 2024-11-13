const express = require('express')

const port = 3000

const app = express()

app.get('/', (req, res) => {
    res.send("Hello AWS Services")
})

app.listen(port, () => {
    console.log(`Server starting on port ${port}`)
})