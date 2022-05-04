const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())

app.get('/start', (req, res) => {
  this.shouldIncrease = true;
  let counter = 0;
  let loopCounter = 0;
  res.status(200).end("OK");
  while (loopCounter < 99999999) {
    loopCounter++;
    counter = counter + 123;
    counter = counter * Math.sqrt(counter);
  }
});

app.listen(5200, () => console.log(`Backend started successfully on 5200`))
module.exports = app;
