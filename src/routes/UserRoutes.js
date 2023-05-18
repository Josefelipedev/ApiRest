import { Router } from 'express';
import userControllers from '../controllers/UserControllers';

const router = new Router();

router.post('/', userControllers.store);
router.get('/', userControllers.index);
router.get('/:id', userControllers.show);
router.put('/:id', userControllers.update);
router.delete('/:id', userControllers.delete);
export default router;

/*
 index --> Lista todos os usuarios -> GET
 store/create --> cria um novo usuario --> POST
 delete-> apaga um usuário --> DELETE
show--> mostra uma usuário -> GET
update--> atualiza uma usuário --> PATCH ou PUT
 */
