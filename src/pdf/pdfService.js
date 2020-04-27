const data = require('../data/data.json');
const utils = require('./utils');

const generatePDF = (callback) => {
    const mainTemplate = `${__dirname}/templates/template.ejs`;

    // Builds HTML
    return utils.generateHTML(mainTemplate, data).then((html) => {
    	// Builds PDF
        return utils.generatePDFromHTML(html, callback);
    }).then((pdf) => {
        return pdf;
    }).catch((error) => {
        console.error('ERROR in PDF generation : ' + error);
        callback({ error });
    });
};

module.exports = {
    generatePDF
};
