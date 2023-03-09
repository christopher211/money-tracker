const express = require('express');
const router = express.Router();

 
router.get('/transactions', (req, res) => {






  res.send('This is the transactions route');
});

module.exports = router;
