import { Router } from 'express';

import authRoutes from './auth-routes.js';
import gameRoutes from './games-routes.js';
import libraryEntryRoutes from './libEntry-routes.js';
import rawgRoutes from './rawg-routes.js';


const router = Router();

router.use('/auth', authRoutes);
router.use('/games', gameRoutes);
router.use('/library', libraryEntryRoutes);
router.use('/rawg', rawgRoutes);


export default router;