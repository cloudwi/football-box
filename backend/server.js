const express = require('express')
const app = express()
const port = 8080

const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://cloudwi:MN77868@box.rp8qn.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch((error) => {
    console.log(error)
  })

app.get('/', (req, res) => res.send('Hello World'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
