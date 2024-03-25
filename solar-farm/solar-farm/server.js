const moment = require('moment');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;
const panels = require('./data.js');

// Initialize freshData with data from data.js
let freshData = panels.data.map(panel => ({
    ...panel,
    time: moment().toISOString(),
    wattage: getRandomValue(0, 400),
    voltage: getRandomValue(0, 20)
}));

function getRandomValue(min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(2);
}

app.use(cors());

app.get('/', (req, res) => {
    // Update existing data with random values
    freshData.forEach(panel => {
        panel.time = moment().toISOString();
        panel.wattage = getRandomValue(0, 400);
        panel.voltage = getRandomValue(0, 20);
    });

    res.send(freshData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
