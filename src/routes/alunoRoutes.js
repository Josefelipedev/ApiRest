import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import AlunoControllers from '../controllers/AlunoControllers';

const router = new Router();

router.get('/', AlunoControllers.index);
router.get('/:id', AlunoControllers.show);
router.post('/', loginRequired, AlunoControllers.store);
router.put('/:id', loginRequired, AlunoControllers.update);
router.delete('/:id', loginRequired, AlunoControllers.delete);

export default router;
