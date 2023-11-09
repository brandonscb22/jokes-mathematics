const mongoose = require('mongoose');
const Joke = require('../models/Joke');
const JokeRepository = require('../repositories/jokesRepository');

const getRandomJoke = async (typeJoke) => {
  // Lógica para obtener el chiste según el tipo (Chuck/Dad)
  console.log(typeJoke);
  switch (typeJoke) {
    case 'Chuck':
        return {joke: await JokeRepository.getRandomJokeChuck()};
        break;
    case 'Dad':
        return {joke: await JokeRepository.getRandomJokeDad()};
        break;
    case undefined:
        const randomNumber = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const number =  randomNumber(1,2);
        return {joke: number == 1 ? await JokeRepository.getRandomJokeChuck(): await JokeRepository.getRandomJokeDad()};
        break;
    default:
        throw "El tipo de chiste es incorrecto.";
  }
};

const getJoke = async (number) => {
    // Lógica para actualizar el chiste en la base de datos
    return await Joke.findOne({ number: number });
  };

const saveJoke = async (jokeText) => {
    // Lógica para guardar el chiste en la base de datos
    const newJoke = {
        text: jokeText,
    };

  return await Joke.create(newJoke);
};

const updateJoke = async (number, jokeText) => {
  // Lógica para actualizar el chiste en la base de datos
  return await Joke.findOneAndUpdate({ number: number }, { text: jokeText });
};

const deleteJoke = async (number) => {
  // Lógica para eliminar el chiste de la base de datos
  return await Joke.findOneAndDelete({ number: number });
};

module.exports = {
  getRandomJoke,
  getJoke,
  saveJoke,
  updateJoke,
  deleteJoke,
};
