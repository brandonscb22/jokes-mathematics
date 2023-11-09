const mathService = require('../services/mathService');

const getLCM = async (req, res) => {
  try {
    const numbers = req.query.numbers;
    const result = await mathService.calculateMCM(numbers);
    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al calcular el mínimo común múltiplo' });
  }
};

const incrementNumber = async (req, res) => {
  try {
    const number = req.query.number;
    const result = await mathService.incrementNumber(number);
    res.json({ result });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al incrementar el número' });
  }
};

module.exports = {
  getLCM,
  incrementNumber,
};
