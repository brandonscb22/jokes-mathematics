const express = require('express');
const mathController = require('../controllers/mathController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Maths
 *   description: The maths managing API
 * /maths?numbers={numbers}:
 *   get:
 *     summary: Get the multiple common minimum
 *     tags: [Maths]
 *     parameters:
 *       - in: path
 *         name: numbers
 *         type: string
 *         required: true
 *         example: 3,4
 *     responses:
 *       200:
 *         description: Get the multiple common minimum
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      result:
 *                          type: number
 *                          example: 12
 *       400:
 *         description: typeJoke different from Chuck or Dad.
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                          type: string
 *                          example: Error al calcular el mínimo común múltiplo
 *
 */
router.get('/', mathController.getLCM);
/**
 * @swagger
 * tags:
 *   name: Maths
 *   description: The maths managing API
 * /maths/increment?number={number}:
 *   get:
 *     summary: Get increment a number by one
 *     tags: [Maths]
 *     parameters:
 *       - in: path
 *         name: number
 *         type: string
 *         required: true
 *         example: 3
 *     responses:
 *       200:
 *         description: Get increment a number by one
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      result:
 *                          type: number
 *                          example: 4
 *
 */
router.get('/increment', mathController.incrementNumber);

module.exports = router;
