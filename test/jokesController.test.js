const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const jokesService = require('../services/jokeService');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Jokes Controller', () => {
  let savedJokeNumber;

  describe('GET /jokes', () => {
    it('should get a random joke', async () => {
      const res = await chai.request(app).get('/jokes?typeJoke=Chuck');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
    });

    it('should handle incorrect joke type', async () => {
      const res = await chai.request(app).get('/jokes?typeJoke=invalidType');
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
      expect(res.body.error).to.equal('El tipo de chiste es incorrecto.');
    });
  });

  describe('POST /jokes', () => {
    it('should save a new joke', async () => {
      const res = await chai.request(app).post('/jokes').send({ joke: 'Nuevo chiste' });
      expect(res).to.have.status(201);
      expect(res.body).to.be.an('object');
      savedJokeNumber = res.body.number; // Guarda el número del chiste para usar en las pruebas posteriores
    });

    it('should handle error when saving a joke', async () => {
      jokesService.saveJoke = async () => {
        throw new Error('Error al guardar el chiste');
      };

      const res = await chai.request(app).post('/jokes').send({ joke: 'Nuevo chiste' });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
      expect(res.body.error).to.equal('Error al guardar el chiste');
    });
  });

  describe('PUT /jokes', () => {
    it('should update an existing joke', async () => {
      const res = await chai.request(app).put(`/jokes?number=${savedJokeNumber}`).send({ joke: 'Chiste actualizado' });
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.text).to.equal('Chiste actualizado');
    });
  });

  describe('DELETE /jokes', () => {
    it('should delete an existing joke', async () => {
      const res = await chai.request(app).delete(`/jokes?number=${savedJokeNumber}`);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.status).to.equal('success');
    });

    it('should handle error when deleting a non-existing joke', async () => {
      jokesService.deleteJoke = async () => {
        return null; // Simula que el chiste no existe
      };

      const res = await chai.request(app).delete(`/jokes?number=${savedJokeNumber}`);
      expect(res).to.have.status(404);
      expect(res.body).to.have.property('error');
      expect(res.body.error).to.equal('El chiste no existe.');
    });

    it('should handle error when deleting a joke', async () => {
      jokesService.deleteJoke = async () => {
        throw new Error('Error al eliminar el chiste');
      };

      const res = await chai.request(app).delete(`/jokes?number=${savedJokeNumber}`);
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
      expect(res.body.error).to.equal('Error al eliminar el chiste');
    });
  });

  after(() => {
    // Limpia cualquier estado o recursos después de las pruebas
  });
});
