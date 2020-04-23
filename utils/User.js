//Node JS SEQUELIZATION OF TABLE USER WRITTEN BY CHAHI RABIE ALA EDDINE
const Sequelize = require('sequelize');
const sealpassDb = require('../sealpassdatabase/sealpassDb');

module.exports = sealpassDb.sequelize.define(
	'user',
	{
		id_client: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},

		nom: {
			type: Sequelize.STRING
		},

		prenom: {
			type: Sequelize.STRING
		},

		mail: {
			type: Sequelize.STRING
		},

		pass: {
			type: Sequelize.STRING
		}
	},
	{
		timestamps: false
	}
)