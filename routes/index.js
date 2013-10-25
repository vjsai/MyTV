
/*
 * GET home page.
 */
var yify = require("yify");
exports.index = function(req, res){
  yify.getMovies(function(data){
     //console.log(data);
      res.render('index', { title: 'MyTV',movieData: data});

  });
};