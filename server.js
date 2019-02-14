const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password:'test',
		database:'my-site'
	}
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/projects', (req,res) => {
	db.select('*').from('projects').orderBy('id')
		.then(projects => res.json(projects))
		.catch(err => res.status(400).json('No projects'))
})

app.post('/AboutText', (req,res) => {
	db.select('*').from('AboutText')
		.then(texts => res.json(texts))
		.catch(err => res.status(400).json('No texts'))
})

app.post('/aboutSkills', (req,res) => {
	db.select('*').from('AboutSkills')
		.then(skills => res.json(skills))
		.catch(err => res.status(400).json('No skills'))
})

app.listen(3000, () => {
	console.log('server runner on 3000');
});