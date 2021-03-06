const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;

// db connection
require('./db/mongoose');

const publicDirectoryPath = path.join(__dirname, './../public');

app.use(express.static(publicDirectoryPath));
app.use(express.json());

// use router
app.use('/api', require('./routers/rumahSakit'));

app.set('view engine', 'ejs');

// Main Page
app.get('/', (req, res) => {
    res.render('index', {
        host : req.headers.host
    });
});

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});