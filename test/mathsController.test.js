const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');  // Asegúrate de ajustar la ruta según tu estructura de carpetas
const mathService = require('../services/mathService');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Math Controller', () => {
  describe('GET /maths', () => {
    it('should calculate the MCM of numbers', async () => {
      const res = await chai.request(app).get('/maths?numbers=2,3,4,5');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.result).to.be.a('number');
    });

    it('should handle error when calculating the MCM', async () => {
      mathService.calculateMCM = async () => {
        throw new Error('Error al calcular el mínimo común múltiplo');
      };

      const res = await chai.request(app).get('/maths?numbers=2,3,4,5');
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
      expect(res.body.error).to.equal('Error al calcular el mínimo común múltiplo');
    });
  });

  describe('GET /maths/increment', () => {
    it('should increment a number', async () => {
      const res = await chai.request(app).get('/maths/increment?number=5');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.result).to.be.a('number');
    });

    it('should handle error when incrementing a number', async () => {
      mathService.incrementNumber = async () => {
        throw new Error('Error al incrementar el número');
      };

      const res = await chai.request(app).get('/maths/increment?number=5');
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
      expect(res.body.error).to.equal('Error al incrementar el número');
    });
  });
});
