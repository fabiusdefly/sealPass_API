const express = require('express');
const user_model = require('../models/user_model')

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const user_list = await user_model.find()
		res.json(user_list)
	} catch (err) {
		res.json({message: err})
	}
});
router.post('/', async (req, res) => {
	const user = new user_model({
		fullName: req.body.fullName,
		email: req.body.email,
		password: req.body.password
	})
	try {
		const saved_user = await user.save()
		res.json(saved_user)
	} catch (err) {
		res.json({message: err})
	}
});
router.get('/login', (req, res) => {
	res.status(200).send('log log log');
});

module.exports = router;