import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  res.status(200).json('ok');
});

app.listen(3000, () => {
  console.log('server up and run on port 3000');
});
