
module.exports = function(app){

	app.get('/', function(req, res) {
		res.render('index');
	});

	// 404
	// always have this route last
	app.get('*', function(req, res){
	  	res.render('404');
	});

}