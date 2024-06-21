const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received submission: Name - ${name}, Email - ${email}, Message - ${message}`);
  // Here you can process the received data (e.g., save to a database)
  res.json({ message: 'Feedback received. Thank you!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
