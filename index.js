import express from 'express';
import log from './utils/logHandler.js';

const app = express();

app.get('/test', (req, res) => {
  try {
    res.status(200).json('ok');
    log.info('success get response');
  } catch (error) {
    log.error('failed get response');
  }
});

app.listen(3000, () => {
  console.log('server up and run on port 3000');
});
