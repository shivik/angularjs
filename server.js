// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
var session = require('express-session');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/Elasticsearch')));

//To be
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false,
    cookie: {
        path: "/",

    }
}));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Elasticsearch/index.html'));
});

/**
 * Get port and store in Express.
 */
const port = '9002';
app.set('port', port);

/**
 * Create HTTP server.
 */


// let serverOptions = {
//     'key': fs.readFileSync('/app/certs/server.key'),
//     'cert': fs.readFileSync('/app/certs/server.crt')
// };

// const Server = https.createServer(serverOptions, app);
// Server.listen(port, () => {
//     console.log(`API running on https:localhost :${port}`);

// });

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
