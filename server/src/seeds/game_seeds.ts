//Store each game by integer Id
//title, genre, platform, releaseDate, imageUrl
import { Game } from "../models/index.js";

//Function that will seed the games
//try/catch function to catch if any errors occur
export const seedGames = async () => {
    try {
        const games = [
            {
                id: 58550,
                title: 'Ghost of Tsushima',
                genre: 'Action-Adventure',
                platform: 'Playstation',
                releaseDate: new Date('2020-07-17'),
                imageUrl: 'server/images/placeHolder.png'
            },
            {
                id: 50734,
                title: 'Sekiro Shadows Die Twice',
                genre: 'Souls-like',
                platform: 'Playstation',
                releaseDate: new Date('2019-03-22'),
                imageUrl: 'server/images/placeHolder.png'
            },
            {
                id: 23598,
                title: 'League of Legends',
                genre: 'MOBA',
                platform: 'PC',
                releaseDate: new Date('2009-10-27'),
                imageUrl: 'server/images/placeHolder.png'
            }
        ]
        await Game.bulkCreate(games)
        console.log('Games have been successfully seeded.');
    }
    catch (error) {
        console.error('Error seeding games:', error)
    }
}
