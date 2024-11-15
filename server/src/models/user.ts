import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';

//Define User model with attributes
export interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
}

// Define what attributes are required for creating a User (id is optional)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

// The User class extends Sequelize's Model class
export class User extends Model<UserAttributes, UserCreationAttributes>

    implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Method to hash a user's password before saving
    public async setPassword(password: string) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
}
// Define the User model's structure and hooks (beforeCreate & beforeUpdate)
export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'users',
            timestamps: true,
            hooks: {
                beforeCreate: async (user: User) => {
                    await user.setPassword(user.password);
                  },
                  beforeUpdate: async (user: User) => {
                    await user.setPassword(user.password);
                  },
            }
        }
    );
    return User;
}