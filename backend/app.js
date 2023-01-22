const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');

const mysql = require('./models/project452.models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        "ok": "Okay done"
    })
})

app.use((req, res, next) => {
    res.status(404).json({
        "message": "Error! Page not found",
    });
});

app.use((err, req, res, next) => {
    if (res.headerSent) {
        return next(err);
    }
    res.status(401).json({
        "message": err,
    });
});

module.exports = app;