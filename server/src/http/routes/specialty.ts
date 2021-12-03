import express from 'express';
import { handleGet } from '../controllers/specialty';

const router = express.Router();

router.get('/specialty', handleGet);

export default router;
