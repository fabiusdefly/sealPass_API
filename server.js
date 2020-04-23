//Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require ('dotenv/config');

//Instanciate express
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Import routes
const userRoute = require('./routes/user');

//Routes
app.use('/user', userRoute);

app.get('/', (req, res) => {
	res.status(200).send('Racine');
});

//Connect DB with mongoose
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log("connect to the db"));

//Lunch Server
app.listen(8080, () => {
	console.log('server is ready!!!')
})