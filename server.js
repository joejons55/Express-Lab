const express = require("express")
const app = express()
const port = 4000


const robots = require("./models/robot")

app.get("/robots", (request, response) => {
    response.send(robots)
})


app.listen(port, () => {
    console.log(`Listening: ${port}`)
})