import express from 'express';
import type { Request, Response } from 'express';
import { LibraryEntry, Game } from '../models/index.js';
import { authenticateToken } from '../middleware/auth.js';

// Corrected AuthenticatedRequest interface
interface AuthenticatedRequest extends Request {
  user?: { id: number; username: string }; // Make `user` optional
}

const router = express.Router();

// POST endpoint to add a game to the user's library (wishlist)
router.post('/library-entries', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
    const { id: gameId, rating } = req.body;
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const userId = req.user.id;

    try {
        const existingEntry = await LibraryEntry.findOne({ where: { userId, gameId } });
        if (existingEntry) {
            return res.status(400).json({ message: 'Game is already in your library' });
        }

        const newEntry = await LibraryEntry.create({ userId, gameId, rating });
        return res.status(201).json(newEntry);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
});

// GET endpoint to retrieve all library entries for the logged-in user
router.get('/library-entries', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  console.log("User ID from token:", req.user?.id); // Log user ID from token

  if (!req.user?.id) {
    return res.status(401).json({ message: 'Unauthorized - No user ID' });
  }

  const userId = req.user.id;

  try {
    const libraryEntries = await LibraryEntry.findAll({
      where: { userId },
      include: [{ model: Game, as: 'Game' }], // Alias should match the one defined in `LibraryEntry.belongsTo(Game, ...)`
    });
    console.log("Fetched library entries:", libraryEntries);
    return res.json(libraryEntries);
  } catch (error: any) {
    console.error("Error fetching library entries:", error.message);
    return res.status(500).json({ message: 'Internal Server Error - Database fetch failed' });
  }
});

// GET endpoint to retrieve a single library entry by ID
router.get('/library-entries/:id', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const userId = req.user.id;
    const { id } = req.params;

    try {
        const entry = await LibraryEntry.findOne({
            where: { id, userId },
            include: [{ model: Game, as: 'Game' }],
        });
        if (entry) {
            return res.json(entry);
        } else {
           return res.status(404).json({ message: 'Library entry not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
});

// PUT endpoint to update an existing library entry
router.put('/library-entries/:id', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const userId = req.user.id;
    const { id } = req.params;
    const { rating } = req.body;

    try {
        const [updatedRows] = await LibraryEntry.update({ rating }, {
            where: { id, userId },
        });
        if (updatedRows > 0) {
            const updatedEntry = await LibraryEntry.findOne({
                where: { id, userId },
                include: [{ model: Game, as: 'Game' }],
            });
            return res.json(updatedEntry);
        } else {
            return res.status(404).json({ message: 'Library entry not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
});

// DELETE endpoint to remove a library entry
router.delete('/library-entries/:id', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const userId = req.user.id;
    const { id } = req.params;

    try {
        const deletedRows = await LibraryEntry.destroy({
            where: { id, userId },
        });
        if (deletedRows > 0) {
            return res.status(204).end();
        } else {
            return res.status(404).json({ message: 'Library entry not found' });
        }
    } catch (error: any) {
       return res.status(500).json({ message: error.message });
    }
});

export default router;