var express = require('express');
var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	res.render('index.html');
	// response.send('Changed to precari');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
