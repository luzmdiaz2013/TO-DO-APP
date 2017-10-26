const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//start the app
const app = express()
//method override
app.use(methodOverride('_method'))

//config
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//static config
app.use(express.static('public'))

//views config
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//config port
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`alive on ${port}`)
})

app.get('/',(req,res)=>{
  res.render('index')
})

//route requires
const toDoRoutes = require('./routes/toDoRoutes.js')
app.use('/toDo',toDoRoutes)// URL path

//catchall
app.get('*',(req,res)=>{
  res.status(404).send('404 not found.')
})
