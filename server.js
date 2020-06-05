 // container for data

 projectData = {};

//get dependencies

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

//create server

const port = 8080;

const server = app.listen(port, listening);

function listening() {
	console.log("server running");
	console.log(`running on localhost: ${port}`);
}

//get route

app.get('/getdata', getData);

function getData(req,res){
	res.send(projectData);
	console.log(projectData);
}


//post route

const data = [];

app.post('/addWeather', addWeather);


function addWeather(req,res){
  let data = req.body;
  projectData['temp'] = data.temperature;
  projectData['zip'] = data.userResponse;
  projectData['date'] = data.date;
  projectData['feelings'] = data.feelings;
  res.send(projectData);
}
