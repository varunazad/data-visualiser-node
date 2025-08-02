const express = require('express');
const fs = require('fs');
const path = require('path');

function chartRouter(options = {}) {
    const {
        labels = [],
        datasets = {
            bar: [],
            pie: [],
            line: []
        },
        title = 'Dynamic Chart Viewer',
        route = '/chart'
    } = options;

    const router = express.Router();

    router.get(route, (req, res) => {
        const chartHtml = fs.readFileSync(path.join(__dirname, 'chart.html'), 'utf-8');
        const filledHtml = chartHtml
            .replace(/__LABELS__/g, JSON.stringify(labels))
            .replace(/__DATASETS__/g, JSON.stringify(datasets))
            .replace(/__TITLE__/g, title);
        res.send(filledHtml);
    });

    return router;
}

module.exports = { chartRouter };
