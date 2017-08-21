var express = require('express');
var path = require('path');
var port = process.env.PORT || 8088;
var app = express();

app.use(express.static(path.join(__dirname, 'bt4')));
app.get('*', (req,res) => {
	res.sendFile(path.resolve(__dirname + '/bt4', 'index.html'));
})
app.listen(port);
console.log('Start123421');