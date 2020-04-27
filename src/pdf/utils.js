const convertHTMLToPDF = require("pdf-puppeteer");
const ejs = require('ejs');

const generatePDFromHTML = (html, callback) => {
    const options = {
        format: "Legal",
        printBackground: true
    };

    const puppeteerArgs = {
        args: ['--allow-file-access-from-files', '--enable-local-file-accesses', '--no-sandbox']
    };

    convertHTMLToPDF(html, callback, options, puppeteerArgs);
};

const generateHTML = (mainTemplate, data) => {
    return new Promise((resolve, reject) => {
        ejs.renderFile(mainTemplate, data, (err, html) => {
            if (err) {
                reject(err);
            } else {
                resolve(html);
            }
        });
    })
};

module.exports = {
    generatePDFromHTML,
    generateHTML
};
