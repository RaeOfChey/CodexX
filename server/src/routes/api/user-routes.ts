import express from 'express';
import type { Request, Response } from 'express';
import { User, LibraryEntry, Game } from '../../models/index.js';
import { authenticateToken } from '../../middleware/auth.js';
const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /users/:id - Get a user by id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /users - Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /users/:id - Update a user by id Accepts a JSON body with a username and password
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.username = username;
      user.password = password;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /users/:id - Delete a user by id
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/profile', authenticateToken, async (req: Request, res: Response) => {
  try {
    // Ensure `req.user` is defined
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // `authenticateToken` middleware should populate `req.user.id` with the logged-in user's ID
    const userId = req.user.id;

    // Find user by ID, including associated favorites if they exist
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
      include: [LibraryEntry] // LibraryEntry for user favorites
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user); // Send user data, including favorite games, back to the client
  } catch (error: any) {
    console.error('Error fetching user profile:', error);
    return res.status(500).json({ message: 'Error fetching user profile' });
  }
});

router.get('/library', authenticateToken, async (req: Request, res: Response) => {
  try {
    // Ensure `req.user` is defined
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id; // Ensure `authenticateToken` sets `req.user.id`

    const libraryEntries = await LibraryEntry.findAll({
      where: { userId },
      include: [{ model: Game, as: 'gameDetails' }], // Assuming 'gameDetails' alias is defined in associations
    });

    return res.json(libraryEntries);
  } catch (error) {
    console.error('Error fetching library entries:', error);
    return res.status(500).json({ message: 'Error fetching library entries' });
  }
});

export { router as userRouter };