const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can process the received data (e.g., save to a database)
    console.log(`Received submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.json({ message: 'Feedback received. Thank you!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
