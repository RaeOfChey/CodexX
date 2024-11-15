import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env

// Verify if environment variables are loaded correctly
console.log('dotenv loaded:', process.env.DB_USER);
console.log('DB_USER:', process.env.DB_USER);  // Should output 'postgres'
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);  // Should output 'Uraqt1006!'
console.log('DB_NAME:', process.env.DB_NAME);  // Should output 'videogame_db'

// Sequelize setup
import { Sequelize } from 'sequelize';

// Use DB_URL if it exists (for Render database)
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD || '',
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

export default sequelize;