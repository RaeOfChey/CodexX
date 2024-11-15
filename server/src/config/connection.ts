import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env

// Verify if environment variables are loaded correctly
console.log('dotenv loaded:', process.env.DATABASE_URL);

// Sequelize setup
import { Sequelize } from 'sequelize';

// Use DATABASE_URL if it exists (for Render database)
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true, // Ensure SSL is enabled
          rejectUnauthorized: false, // This is necessary for Render databases
        },
      },
    })
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