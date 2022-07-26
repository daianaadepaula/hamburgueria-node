const express = require('express')

const port = 3000
const app = express()


const orders = []

app.get('/orders', (request, response) => {
    return response.json(orders)
})



app.listen(port, () => {
    console.log(`🌎 Server started on port ${port}`)
})