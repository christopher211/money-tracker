const express = require('express');
const router = express.Router();

router.get('/account', (req, res) => {


    
  res.send('This is the account route');
});

module.exports = router;
