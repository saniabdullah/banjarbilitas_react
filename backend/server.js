require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const lowonganRoutes = require('./routes/lowongan')
const userRouter = require('./routes/user')


mongoose.set('strictQuery', false);

// express app
const app = express()

app.get('/', (req, res) => {
  res.json({
    hello: 'hi'
  })
})


// cors
app.use(cors())

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/lowongans', lowonganRoutes)
app.use('/api/user', userRouter)

// app.listen("5000", () => {
//   console.log('listening for requests on port 5000')
// })

// connect to db
mongoose.connect("mongodb+srv://absani:Barito07@banjarbilitas.2y3yatp.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen("5000", () => {
      console.log('listening for requests on port 5000')
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
  