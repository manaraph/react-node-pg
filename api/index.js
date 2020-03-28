require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
const merchantRouter = require('./routes/merchants');
const app = express();
const port = process.env.APIPORT || 3001;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// Setup swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Setup our merchant Router
app.use('/api/v1', merchantRouter );

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});