const express = require('express')

const app = express()

const port = process.env.PORT || 4000
const localhost = `127.0.0.1`

app.set('views', 'views')
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {name: 'Stellar'})
})

console.log(process.env.PORT)

app.listen(port, () => {
    console.log(`Listening http://${localhost}:${port}`)
})