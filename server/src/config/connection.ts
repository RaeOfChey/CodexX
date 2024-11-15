import dotenv from 'dotenv';
dotenv.config();

console.log('dotenv loaded:', process.env.DB_USER);

console.log('DB_USER:', process.env.DB_USER);  // Should output 'postgres'
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);  // Should output 'Uraqt1006!'
console.log('DB_NAME:', process.env.DB_NAME);  // Should output 'videogame_db'

import { Sequelize } from 'sequelize';

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