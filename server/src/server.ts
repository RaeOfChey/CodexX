const forceDatabaseRefresh = false;

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import sequelize from './config/connection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Parse PORT to number
const PORT = parseInt(process.env.PORT || '3001', 10);

app.use(express.json());
app.use('/api', routes);
app.use(express.static('../client/dist'));

// Catch-all route to serve React's index.html for unrecognized routes
app.get('*', (__req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Synchronize the database and then start the server
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
