const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/crud'));

// Send all requests to index.html
app.get('*', function (req, res) {
    const index = path.join(__dirname, 'crud', 'index.html');
    res.sendFile(index);
  });

// default Heroku PORT
app.listen(process.env.PORT || 3000);