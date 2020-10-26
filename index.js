const express = require('express');
const app = express();

app.use('/', express.static('static'));

// Start listening
app.listen(3000, () => console.log('Listening on port 3000...'));