import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();

console.log("Request URL:", process.env.REQUEST_URL);
console.log("API Key:", process.env.API_KEY);

// -------------GAMES---------------
router.get('/game/:id', async (req: Request, res: Response) => {
  try {
    const url = `${process.env.REQUEST_URL}games/${req.params.id}?key=${process.env.API_KEY}`;
    console.log(`Fetching URL: ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.log("Error in /game/:id route:", error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get('/games', async (_: Request, res: Response) => {
  try {
    const url = `${process.env.REQUEST_URL}games?page=1&page_size=15&key=${process.env.API_KEY}`;
    console.log(`Fetching URL: ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.log("Error in /games route:", error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get('/search/:game', async (req: Request, res: Response) => {
  // console.log("hi, you made it to the server");
  try {
    const url = `${process.env.REQUEST_URL}games?search=${req.params.game}&key=${process.env.API_KEY}`;
    console.log(`Fetching URL: ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.log("Error in /game/:search route:", error.message);
    res.status(500).json({ message: error.message });
  }
});

  // --------------DEVELOPMENT TEAM----------------
  router.get('/devteam/:id', async (req: Request, res: Response) => {
    try {
      const url = `${process.env.REQUEST_URL}games/${req.params.id}/development-team?key=${process.env.API_KEY}`;
      console.log(`Fetching URL: ${url}`);
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error: any) {
      console.log("Error in /devteam/:id route:", error.message);
      res.status(500).json({ message: error.message });
    }
});

export default router;
