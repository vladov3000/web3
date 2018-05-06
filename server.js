var express = require('express')
  , logger = require('morgan')
  , app = express()
  , home = require('pug').compileFile(__dirname + '/source/templates/homepage.pug')
  , about = require('pug').compileFile(__dirname + '/source/templates/aboutpage.pug')
  , web = require('pug').compileFile(__dirname + '/source/templates/webpage.pug')
  , comp = require('pug').compileFile(__dirname + '/source/templates/comppage.pug')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

function makePage (page){
  return function (req, res, next) {
    try {
      res.send(page)
    } catch (e) {
      next(e)
    }
  }
}

app.get('/', makePage(home({ title: 'Home' })))

app.get('/about', makePage(about({ title: 'About' })))

app.get('/web', makePage(web({ title: 'Web' })))

app.get('/competitions', makePage(comp({ title: 'Competitions' })))

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
