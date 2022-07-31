const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const { User } = require('./models/User')

const config = require('./config/key')

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')

mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch((error) => {
    console.log(error)
  })

app.get('/', (req, res) => res.send('Hello World 안녕하세요! 바꾸어본다'))

app.post('/signup', (req, res) => {
  const user = new User(req.body)

  user.save((error, userInfo) => {
    if (error) return res.json({ success: false, error })
    return res.status(200).json({
      success: true,
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
