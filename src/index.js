const express = require('express')
const path = require('path')
const app = express()
const {engine} = require('express-handlebars')
const port = 3000
 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'main/views'));


app.use(express.static(path.join(__dirname,'public/images')))
app.use(express.static(path.join(__dirname,'public/css')))
app.get('/',function (req, res)  {
  return  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})