var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.name);
app.get('/location', mainCtrl.location);
app.get('/occupations', mainCtrl.occupations);
app.get('/occupations/latest', mainCtrl.latest);
app.get('/hobbies', mainCtrl.hobbies);
app.get('/hobbies/:type', mainCtrl.hobbiesType);
app.get('/skills', mainCtrl.skills);

app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOcc)
app.post('/skills', middleware.generateId, mainCtrl.addSkill);


app.listen(3000, function() {
	console.log('listening on port 3000...')
})

