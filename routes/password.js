const express = require('express');
const bcrypt = require('bcrypt');
const password_model = require('../models/password_model');

const router = express.Router();

router.get('/', (req, res) => {
	//TODO fonction pour récupérer la liste de tous les mots de passe enregistrer dans la base
});
router.post('/', (req, res) => {
    //TODO fonction pour enregistrer un nouveau mot de passe dans la base
});
router.put('/:id', (req, res) => {
	//TODO fonction pour mettre a jour un mot de passe dans la base
});
router.delete('/:id', (req, res) => {
	//TODO fonction pour Supprimer un mot de passe dans la base
});



module.exports = router;