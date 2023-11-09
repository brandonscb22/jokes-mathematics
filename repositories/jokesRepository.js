const axios = require('axios');

const getRandomJokeChuck = async () => {
  const response = await axios.get('https://api.chucknorris.io/jokes/random');
  return response.data.value;
};

const getRandomJokeDad = async () => {
  const response = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json',
    },
  });
  return response.data.joke;
};

module.exports = {
    getRandomJokeChuck,
    getRandomJokeDad,
};
