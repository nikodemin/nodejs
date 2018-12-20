'use strict'
var express = require('express'),
	
	app = express();

app.set('port',	process.env.PORT || 3000);

app.use((req,res)=>{
	res.type('text/plain');
	res.status(404);
	res.send('404 - not found');
});

app.use((err,req,res,next)=>{
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - internal server error');
});

app.listen(app.get('port'), ()=>{
	console.log('Express running on port'+app.get('port'));
});
