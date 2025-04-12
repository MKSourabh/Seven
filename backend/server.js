const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import CORS

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// API Endpoint to Save Email
app.post('/submit-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  console.log('Received email:', email);

  // Ensure the emails.txt file exists
if (!fs.existsSync('emails.txt')) {
  fs.writeFileSync('emails.txt', '', (err) => {
    if (err) console.error('Error creating emails.txt:', err);
  });
}

  // Append the email to a text file
  fs.appendFile('emails.txt', `${email}\n`, (err) => {
    if (err) {
      console.error('Error saving email to file:', err);
      return res.status(500).json({ message: 'Error saving email' });
    }
    res.status(200).json({ message: 'Email saved successfully' });
  });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});