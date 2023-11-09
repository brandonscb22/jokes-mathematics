const express = require('express');
const jokesController = require('../controllers/jokeController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API
 * /jokes:
 *   get:
 *     summary: Get a joke
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: typeJoke
 *         type: string
 *         required: false
 *         example: Chuck or Dad
 *     responses:
 *       200:
 *         description: Get joke.
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      joke:
 *                          type: string
 *                          example: Chuck Norris became Grand ChessMaster when he defeated his opponents only by using one piece (his leg) and on his first move (the roundhouse kick). He never lost.
 *       400:
 *         description: typeJoke different from Chuck or Dad.
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                          type: string
 *                          example: El tipo de chiste es incorrecto.
 *
 */
router.get('/', jokesController.getRandomJoke);
/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API
 * /jokes:
 *   post:
 *     summary: Create a joke
 *     tags: [Jokes]
 *     requestBody:
 *          description: Optional description in *Markdown*
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          joke:
 *                              type: string
 *                              example: test.
 *     responses:
 *       200:
 *         description: Create joke.
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      text:
 *                          type: string
 *                          example: test.
 *                      number:
 *                          type: number
 *                          example: 9
 *
 */
router.post('/', jokesController.saveJoke);
/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API
 * /jokes?number={number}:
 *   put:
 *     summary: Update a joke
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: number
 *         type: string
 *         required: true
 *         example: 3
 *     requestBody:
 *          description: Optional description in *Markdown*
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          joke:
 *                              type: string
 *                              example: test.
 *     responses:
 *       200:
 *         description: Get joke.
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      text:
 *                          type: string
 *                          example: test.
 *                      number:
 *                          type: number
 *                          example: 9
 *
 */
router.put('/', jokesController.updateJoke);
/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API
 * /jokes?number={number}:
 *   delete:
 *     summary: Delete a joke
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: number
 *         type: string
 *         required: true
 *         example: 3
 *     responses:
 *       200:
 *         description: Delete a joke.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      status:
 *                          type: string
 *                          example: success
 *       404:
 *         description: Not found joke.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                          type: string
 *                          example: El chiste no existe.
 *
 */
router.delete('/', jokesController.deleteJoke);

module.exports = router;
