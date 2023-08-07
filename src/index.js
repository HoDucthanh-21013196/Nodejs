const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3001;

const route = require('./Routes'); //tự động nạp file index.js

app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// Sử dụng để trả về yêu cầu của method POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template engine (handlebars)
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
