//Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require ('dotenv/config');

//Instanciate express
const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Import routes
const userRoute = require('./routes/user');
const passwordRoute = require('./routes/password');

//Routes
app.use('/user', userRoute);
app.use('/password', passwordRoute);

app.get('/', (req, res) => {
	res.status(200).send('Racine');
});

//Connect DB with mongoose
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log("connect to the db"));

//Lunch Server
app.listen(8080, () => {
	console.log('server is ready!!!')
})