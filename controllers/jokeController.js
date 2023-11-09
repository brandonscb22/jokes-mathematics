const jokesService = require('../services/jokeService');

const getRandomJoke = async (req, res) => {
  try {
    const typeJoke = req.query.typeJoke;
    const joke = await jokesService.getRandomJoke(typeJoke);
    res.json(joke);
  } catch (error) {
    console.error(error);
    if(error === 'El tipo de chiste es incorrecto.'){
        res.status(400).json({ error });
    } else {
        res.status(500).json({ error: 'Internal Server Error' });
    } 
  }
};

const saveJoke = async (req, res) => {
  try {
    const jokeText = req.body.joke;
    const joke = await jokesService.saveJoke(jokeText);
    res.status(201).json(joke);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al guardar el chiste' });
  }
};

const updateJoke = async (req, res) => {
  try {
    const number = req.query.number;
    const jokeText = req.body.joke;
    await jokesService.updateJoke(number, jokeText);
    const joke = await jokesService.getJoke(number);
    res.json(joke);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al actualizar el chiste' });
  }
};

const deleteJoke = async (req, res) => {
  try {
    const number = req.query.number;
    const joke = await jokesService.deleteJoke(number);
    if(joke){
        res.status(200).json({status:'success'});
    }else{
        res.status(404).json({ error: 'El chiste no existe.' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al eliminar el chiste' });
  }
};

module.exports = {
    getRandomJoke,
    saveJoke,
    updateJoke,
    deleteJoke,
};
