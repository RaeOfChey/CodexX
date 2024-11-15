import { seedUser } from './user_seeds.js';
import { seedGames } from './game_seeds.js';
import { seedLibraryEntries } from './library_entry.js';
import sequelize from '../config/connection.js';

//Function that will seed all the sample data
//try/catch function to catch any errors
const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
    await seedGames();
    console.log('\n----- GAMES SEEDED -----\n');
     await seedLibraryEntries();
    console.log('\n----- LIBRARY ENTRIES SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();