# Proyecto de API REST con Express.js y MongoDB

Este proyecto es una API REST desarrollada con Node.js utilizando Express.js como framework para el servidor y MongoDB como base de datos. La API proporciona funcionalidades para obtener chistes aleatorios, gestionar chistes en una base de datos MongoDB, calcular el mínimo común múltiplo de una lista de números y aumentar un número en 1.

## Estructura del Proyecto

El proyecto sigue una arquitectura limpia para organizar el código de manera modular. Las principales carpetas del proyecto son:

- `controllers`: Contiene los controladores de la API para cada entidad.
- `services`: Contiene los servicios que encapsulan la lógica de negocio.
- `repositories`: Contiene los repositorios para interactuar con los proveedores de datos externos.
- `routes`: Define las rutas de la API y conecta los controladores con las peticiones HTTP.
- `models`: Define los modelos de datos para interactuar con la base de datos MongoDB.

## Dependencias Principales

- [Express.js](https://expressjs.com/): Framework web para Node.js.
- [MongoDB](https://www.mongodb.com/): Base de datos NoSQL.
- [Mongoose](https://mongoosejs.com/): ODM para MongoDB.
- [Axios](https://axios-http.com/): Cliente HTTP para realizar solicitudes a APIs externas.
- [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/): Herramientas de pruebas unitarias.

## Instrucciones de Uso

1. Clona este repositorio: `git clone https://github.com/tuusuario/tuproyecto.git`
2. Instala las dependencias: `npm install`
3. Configura la conexión a la base de datos en el archivo `.env`.
4. Ejecuta la aplicación: `npm start`
5. Accede a la API en `http://localhost:3000`

## Ejemplo de archivo .env

```
PORT=3000
DB_NAME=jokes
```

## Endpoints Principales

### Chistes

- `GET /jokes`: Obtiene un chiste aleatorio.
- `POST /jokes`: Guarda un nuevo chiste en la base de datos.
- `PUT /jokes`: Actualiza un chiste existente.
- `DELETE /jokes`: Elimina un chiste existente.

### Matemático

- `GET /maths`: Calcula el mínimo común múltiplo de una lista de números.
- `GET /maths/increment`: Incrementa un número en 1.

## Documentación Swagger

La documentación Swagger está generada automáticamente a partir de los comentarios JSDoc en el código fuente. Puedes acceder a la documentación Swagger visitando [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Pruebas Unitarias

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

```bash
npm test