const express = require('express');
const router = express.Router();


router.get('/analytics', (req, res) => {
 
  res.send('This is the analytics route');
});

module.exports = router;
