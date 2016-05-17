var router = require('koa-router')();

//Config MongoDB
var mongo = require('../config/mongo');


router.post('/in_cinemas', function *(next){
   try{
      var moviesInCinemas = yield mongo.moviesInCinemas.find({});
      var moviesOnLaptop = yield mongo.moviesOnLaptop.find({});
      var movieIsEmpty = moviesInCinemas.length == 0 && moviesOnLaptop.length == 0; 
      this.body = {data: moviesInCinemas, movieIsEmpty: movieIsEmpty };
   }catch(e){
      this.body = "An error occurred: " + e;
      this.status = 500;
   }
});


router.post('/in_cinemas/save', function *(next){
    var movie = this.request.body.movie;
    try{
       var isExisted = yield mongo.moviesInCinemas.findOne({'_id': movie._id});
       if(isExisted){
           this.body = yield mongo.moviesInCinemas.update({'_id': movie._id},
            {'name': movie.name, 'date': movie.date, 'cinema': movie.cinema,
             'city': movie.city, 'hall': movie.hall, 'effect': movie.effect,
             'type': movie.type, 'rate': movie.rate, 'isfavourite': movie.isfavourite });
        }else{
           this.body = yield mongo.moviesInCinemas.insert(movie);
       }
    }catch(e){
        this.body = "An error occurred: " + e;
        this.status = 500;
    }
});

router.post('/on_laptop', function *(next){
   try{
      var res = yield mongo.moviesOnLaptop.find({});
      this.body = res;
    }catch(e){
      this.body = "An error occurred: " + e;
      this.status = 500;
    }
});

router.post('/on_laptop/save', function *(next){
  var movie = this.request.body.movie;
  try{
     var isExisted = yield mongo.moviesOnLaptop.findOne({'_id': movie._id});
     if(isExisted){
        this.body = yield mongo.moviesOnLaptop.update({'_id': movie._id},
          {'name': movie.name, 'date': movie.date, 'type': movie.type,
           'rate': movie.rate, 'isfavourite': movie.isfavourite});
     }else{
        this.body = yield mongo.moviesOnLaptop.insert(movie);
     }
  }catch(e){
      this.body = "An error occurred: " + e;
      this.status = 500;
  }
});



module.exports = router;