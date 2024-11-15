//Store each game by integer Id
//title, genre, platform, releaseDate, imageUrl
import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

// Define the Game model attributes
export interface GameAttributes {
    id: number;
    title: string;
    genre: string;
    platform: string;
    releaseDate: Date;
    imageUrl: string;
}

// Define what attributes are required for creating a Game (id is optional)
interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

// The Game class extends Sequelize's Model class
export class Game extends Model<GameAttributes, GameCreationAttributes>
    implements GameAttributes {
    public id!: number;
    public title!: string;
    public genre!: string;
    public platform!: string;
    public releaseDate!: Date;
    public imageUrl!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Define the Game model's structure
export function GameFactory(sequelize: Sequelize): typeof Game {
    Game.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            platform: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            releaseDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'games',
            timestamps: true, // Sequelize will automatically create 'createdAt' and 'updatedAt' columns
        }
    );
    return Game;
}
