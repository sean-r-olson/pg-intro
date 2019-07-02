const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded( {extended: true}));

// Routes will go here 

// Start up server 
const PORT = process.env.PORT || 5000;
app.listen ( PORT, () => {
    console.log(`listening on port ${PORT}...`);
});

