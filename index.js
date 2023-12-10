const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());


app.get('/', async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const browserWSEndpoint = browser.wsEndpoint();
        await browser.close();
        res.send(browserWSEndpoint);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
