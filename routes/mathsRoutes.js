const express = require('express');
const mathController = require('../controllers/mathController');

const router = express.Router();

router.get('/', mathController.getLCM);
router.get('/increment', mathController.incrementNumber);

module.exports = router;
