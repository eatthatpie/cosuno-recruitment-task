import express from 'express';
import { handleGet } from '../controllers/company';

const router = express.Router();

router.get('/company', handleGet);

export default router;
