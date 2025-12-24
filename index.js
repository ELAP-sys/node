const express = require('express')
const path = require('path')
const app = express()
const port = 4040

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/test', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(path.join(__dirname, 'public', 'login.html'), (err) => {
        if (err) {
            console.error(`failed sending, ${err}`)
        }
        else {
            console.log("done!")
        }
    })
})


const todos = [
    "leila leila",
    "jusus christ"
]


app.post('/test', (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    console.log(req.body)
    const { usr, pass } = req.body
    if (usr === "parsaamir" && pass === "2000")
        res.status(200).send(`profile: ${todos}`)
    else if (usr === "parsaamir")
        res.status(403).send("wrong password")
    else
        res.status(404).send("not found")

})


app.listen(port, () => {
    console.log(`servver listening on , ${port}`)
})