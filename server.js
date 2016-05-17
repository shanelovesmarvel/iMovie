
var koa = require('koa');
var logger = require('koa-logger');
var router = require('koa-router')();
var parse = require('co-body');
var serve = require('koa-static');
var path  = require('path');
var bodyparser = require('koa-bodyparser');
var views = require('co-views');
var path  = require('path');
var jwt = require('koa-jwt');


var render= views(__dirname + '/views', { map: { html: 'jade' }});

var app = koa();

app.use(serve('./public'));
app.use(serve('./node_modules'));
app.use(serve('./config'));

// middleware
app.use(logger());
app.use(bodyparser());

router.get('/', function *(){
     this.body = yield render('nav.jade', { title: 'iMovie' });
});

router.get('/login', function *(){
     this.body = yield render('login.jade', { title: 'iMovie' });
});

router.get('/index/', function *(){
	this.body = yield render('index.jade', {title: 'iMovie'});
});

router.get('/movies_in_cinemas', function *(){
	this.body = yield render('movies_in_cinemas.jade', {title: 'iMovie'});
});

router.get('/movies_on_laptop', function *(){
	this.body = yield render('movies_on_laptop.jade', {title: 'iMovie'});
});

router.get('/movie_info_welcome', function *(){
	this.body = yield render('movie_info_welcome.jade', {title: 'iMovie'});
});

router.get('/movie-info', function *(){
	this.body = yield render('movie-info.jade', {title: 'iMovie'});
});

app.use(jwt({ secret: 'shared-secret' , passthrough: true}));

// route middleware
var user = require('./routes/user');
var movie = require('./routes/movie');

router.use('/user', user.routes());
router.use('/movie',movie.routes());

app.use(router.routes());

// http server listening
app.listen(5373);
console.log('listening on port 5373');

module.exports = app;