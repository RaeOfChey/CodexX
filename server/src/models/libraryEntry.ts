//The LibraryEntry model links a User to a Game, acting as a many-to-many relationship table.
// It includes an additional rating attribute to represent the user’s rating of the game.
import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
// Define the LibraryEntry model attributes
export interface LibraryEntryAttributes {
    id: number;
    userId: number;
    gameId: number;
    rating: number;
}

// Define what attributes are required for creating a LibraryEntry (id is optional)
interface LibraryEntryCreationAttributes extends Optional<LibraryEntryAttributes, 'id'> {}

//The LibraryEntry class extends Sequelize's Model class
export class LibraryEntry extends Model<LibraryEntryAttributes, LibraryEntryCreationAttributes>
    implements LibraryEntryAttributes {
    public id!: number;
    public userId!: number;
    public gameId!: number;
    public rating!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Define the LibraryEntry model's structure
export function LibraryEntryFactory(sequelize: Sequelize): typeof LibraryEntry {
    LibraryEntry.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onDelete: 'CASCADE',
            },
            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'games', key: 'id' },
                onDelete: 'CASCADE',
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: true,
                validate: { min: 1, max: 5 },  // Optional, restrict ratings to a 1–5 scale
            },
        },
        {
            sequelize,
            tableName: 'library_entries',
            timestamps: true,
        }
    );
    return LibraryEntry;
}