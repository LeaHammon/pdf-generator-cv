### Install
`npm install`

### Run (using hot reload)
`npm start`
then go to: http://localhost:3000/pdf

### How does it work
- Data are stored in json file in /src/data/data.json
- Inject data in ejs template to generate a HTML in /src/pdf/pdfService.js
- Use puppeteer to transform HTML into PDF in /src/pdf/pdfService.js