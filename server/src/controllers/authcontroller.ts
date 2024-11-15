import { Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import { UniqueConstraintError } from 'sequelize'; // Import Sequelize's UniqueConstraintError
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    console.log("Plain Text Password Entered:", password);
    console.log("Stored Hashed Password:", user.password);

    const passwordIsValid = await bcrypt.compare(password, user.password);
    console.log("Password Validation Result:", passwordIsValid);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: user.id, username }, secretKey, { expiresIn: '1h' });

    return res.json({ token, userId: user.id });
  } catch (error) {
    return res.status(500).json({ message: 'Login failed' });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  try {
    const newUser = await User.create({ username, email, password });

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: newUser.id, username }, secretKey, { expiresIn: '1h' });

    return res.json({ token, userId: newUser.id });
  } catch (error) {
    // Check if error is a UniqueConstraintError from Sequelize
    if (error instanceof UniqueConstraintError) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Signup failed' });
  }
};

// Compare this snippet from server/src/routes/api/index.ts: