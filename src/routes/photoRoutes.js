import { Router } from 'express';

import photoControllers from '../controllers/PhotoControllers';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photoControllers.store);

export default router;
