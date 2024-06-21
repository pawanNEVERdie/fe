const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact-form', (req, res) => {
    const { name, email, message } = req.body;
    const submission =[]
    submission.
    console.log(`Received submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.json({ message: 'Feedback received. Thank you!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
