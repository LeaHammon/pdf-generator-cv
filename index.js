const express = require('express');
const pdfService = require('./src/pdf/pdfService');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
	console.log('Listening on Port : ', port);
});

app.get('/pdf', (req, res) => {
	const callback = (pdf) => {
		if (pdf && !!pdf.error) {
			res.status(400).send(pdf.error);
		} else {
			res.setHeader("Content-Type", "application/pdf");
			res.send(pdf);
		}
	};

	pdfService.generatePDF(callback);
});
