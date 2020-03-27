const express = require('express');
const merchants = require('../controllers/merchantController');
const router = express.Router();

router.get('/merchants', (req, res) => {
  // res.status(200).send('Hello World!');
  merchants.getMerchants().then( response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.post('/merchants', (req, res) => {
  // res.status(200).send('Hello World!');
  merchants.createMerchant(req.body).then( response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.delete('/merchants/:id', (req, res) => {
  // res.status(200).send('Hello World!');
  merchants.deleteMerchant(req.params.id).then( response => {    
    res.status(200).send(response);
  }).catch(error => {    
    res.status(500).send(error);
  })
});

module.exports = router;
