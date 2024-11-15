import { Router } from 'express';
import { login, signup } from '../controllers/authcontroller.js';

const router = Router();

router.post('/login', login);  // POST /api/auth/login
router.post('/new', signup);    // POST /api/auth/new

export default router;