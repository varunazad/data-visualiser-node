# 📊 data-visualiser-node

`data-visualiser-node` is a simple Node.js utility to instantly visualize your datasets using [Chart.js](https://www.chartjs.org/) — **without writing any frontend code**.

Use it in dashboards, internal tools, analytics backends, or any Express-based Node.js app where you need quick, interactive data visualizations.

---

## ✨ Features

- ✅ Easy setup with Express
- 📈 Interactive charts (Bar, Pie, Line)
- 💡 No frontend or HTML setup needed
- 📦 Self-contained with zero client-side dependency
- 🎯 Ideal for internal tools, dashboards, or quick demos

---

## 🚀 Installation

```bash
npm install data-visualiser-node
```

---

## 🚀 Example

```js
const express = require('express');
const { chartRouter } = require('data-visualiser-node');

const app = express();
const port = 3000;

// Example data
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
const datasets = {
    bar: [12, 19, 3, 5, 2],
    pie: [10, 30, 15, 25, 20],
    line: [8, 15, 10, 6, 12]
};

app.use(chartRouter({
    title: 'Color Popularity Chart',
    labels,
    datasets,
    route: '/chart'
}));

app.listen(port, () => {
    console.log(`Chart available at http://localhost:${port}/chart`);
});
```# data-visualiser-node
