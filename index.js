const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// CORS for react app, assuming port 3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

const fileContents = fs.readFileSync('./five-letter-words.json', 'utf-8');
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;

app.get('/', (req, res) => {
  // Select random word
  const word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];

  res.send(word);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port} 🚀`));

module.exports = app;
