import { Router } from 'express';
import TokenControllers from '../controllers/TokenControllers';

const router = new Router();

router.post('/', TokenControllers.store);

export default router;
