const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());




app.get('/api/products', (req, res) => {
	const data = fs.readFileSync(path.resolve(__dirname, 'database', 'products.json'));
	res.status(200).send(data);
});

app.get('/api/cart', (req, res) => {
	const data = fs.readFileSync(path.resolve(__dirname, 'database', 'cart.json'));
	res.status(200).send(data);
});




app.use(express.static(path.resolve(__dirname, 'src/css')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3000);