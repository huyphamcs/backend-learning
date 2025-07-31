

import express from 'express';
import { getABC, getHome, test } from '../controllers/homeController.js';

const router = express.Router()


router.get('/', getHome);
router.get('/abc', getABC);
router.get('/test', test);




export default router;          