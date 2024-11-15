//include userId, gameId, and rating of game
//The LibraryEntry model links a User to a Game, acting as a many-to-many relationship table.
// It includes an additional rating attribute to represent the user’s rating of the game.
import { LibraryEntry } from "../models/index.js";

//Function that will seed the library entries with these attributes
//try/catch function to catch any errors
export const seedLibraryEntries = async () => {
    try {
        const entries = [
            {
                userId: 1,
                gameId: 2,
                rating: 4
            },

            {
                userId: 2,
                gameId: 1,
                rating: 5
            },

            {
                userId: 3,
                gameId: 3,
                rating: 2
            }
        ]
        await LibraryEntry.bulkCreate(entries)
        console.log('Library Entries have been successfully seeded.')
    } catch (error) {
        console.log('Error seeding library entries:', error)
    }
};
