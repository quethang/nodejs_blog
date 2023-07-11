const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const methodOverride = require('method-override')
const app = express()
const port = 3000
const db = require('./config/db')

//connect db
db.connect()

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//http logger
app.use(morgan('combined'))



//template engine
app.engine('hbs', 
handlebars.engine({
  extname: '.hbs'  
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})