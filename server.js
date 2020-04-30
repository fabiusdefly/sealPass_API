//Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require ('dotenv/config');

//Instanciate express
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Import routes
const userRoute = require('./routes/user');
const passwordRoute = require('./routes/password');
const cloudRoute = require('./routes/cloud');

//Routes
app.get('/', (req, res) => {
	res.status(200).send('Racine');
});

app.use('/user', userRoute);
app.use('/user/password', passwordRoute);
app.use('/user/cloud', cloudRoute);


//Connect DB with mongoose
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log("connect to the db!!!"));

//Lunch Server
app.use(cors());
app.listen(8080, () => {
	console.log('server is ready!!!')
})