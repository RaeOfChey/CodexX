//post request to create a game entry
//delete /:id  request to delete a game entry by id
//get request to grab all game entries
//put /:id request to update a game entry by grabbing it's id

import express from 'express';
import type { Request, Response } from 'express';
import { Game } from '../models/index.js';

const router = express.Router();

// POST endpoint to create a new game
router.post('/games', async (req: Request, res: Response) => {
    const { title, genre, platform, releaseDate, imageUrl } = req.body;
    try {
      const newGame = await Game.create({ title, genre, platform, releaseDate, imageUrl });
      res.status(201).json(newGame);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // GET endpoint to retrieve all games
  router.get('/games', async (_req: Request, res: Response) => {
    try {
      const games = await Game.findAll();
      res.json(games);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // GET endpoint to retrieve a single game by ID
  router.get('/games/:id', async (req: Request, res: Response) => {
    try {
      const game = await Game.findByPk(req.params.id);
      if (game) {
        res.json(game);
      } else {
        res.status(404).json({ message: 'Game not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // PUT endpoint to update an existing game by ID
  router.put('/games/:id', async (req: Request, res: Response) => {
    try {
      const [updatedRows] = await Game.update(req.body, {
        where: { id: req.params.id },
      });
      if (updatedRows > 0) {
        const updatedGame = await Game.findByPk(req.params.id);
        res.json(updatedGame);
      } else {
        res.status(404).json({ message: 'Game not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // DELETE endpoint to delete a game by ID
  router.delete('/games/:id', async (req: Request, res: Response) => {
    try {
      const deletedRows = await Game.destroy({
        where: { id: req.params.id },
      });
      if (deletedRows > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Game not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export default router;