const express = require('express');
const jokesController = require('../controllers/jokeController');

const router = express.Router();

router.get('/', jokesController.getRandomJoke);
router.post('/', jokesController.saveJoke);
router.put('/', jokesController.updateJoke);
router.delete('/', jokesController.deleteJoke);

module.exports = router;
