import { User } from '../models/index.js'
import bcrypt from 'bcrypt';

//sample data to be seeded into database
export const seedUser = async () => {
    //try-catch to handle any errors
    try {
        const users = [

            {
                username: 'buster',
                password: await bcrypt.hash('12345678', 10), // hashed password
                email: 'email@email.com'
            },
            {
                username: 'guster',
                password: await bcrypt.hash('87654321', 10), // hashed password
                email: 'gmail@gmail.com'
            },
            {
                username: 'tuster',
                password: await bcrypt.hash('abcdefgh', 10), // hashed password
                email: 'yahoo@yahoo.com'
            },
            {
                username: 'wester',
                password: await bcrypt.hash('ijklmnop', 10), // hashed password
                email: 'hotmail@hotmail.com'
            },

        ]
        await User.bulkCreate(users)
        console.log('Users have been successfully seeded.');
    }
    catch (error) {
        console.error('Error seeding users:', error)
    }
};
