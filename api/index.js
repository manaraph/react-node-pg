const express = require('express');
const dbModel = require('./model');
const app = express();
const port = 3001;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
})

app.get('/', (req, res) => {
  // res.status(200).send('Hello World!');
  dbModel.getMerchants().then( response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

app.post('/merchants', (req, res) => {
  // res.status(200).send('Hello World!');
  dbModel.createMerchant(req.body).then( response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

app.delete('/merchants/:id', (req, res) => {
  // res.status(200).send('Hello World!');
  dbModel.deleteMerchant(req.params.id).then( response => {    
    res.status(200).send(response);
  }).catch(error => {    
    res.status(500).send(error);
  })
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});