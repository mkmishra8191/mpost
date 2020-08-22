const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const morgan = require('morgan')
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

app.use(express.static('public'));





app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
