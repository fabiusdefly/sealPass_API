const express = require('express');
const cloud_model = require('../models/cloud_model');

const router = express.Router();

router.get('/', (req, res) => {
	//TODO Récuperer la liste de tous les fichiers
});
router.post('/', (req, res) => {
    //TODO Enrégistrer un fichier sur le cloud
});
router.put('/:id', (req, res) => {
	//TODO Mettre a jjour u fichier
});
router.delete('/:id', (req, res) => {
	//TODO supprimer un fichier
});



module.exports = router;