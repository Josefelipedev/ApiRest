import { Router } from 'express';
import userControllers from '../controllers/UserControllers';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// Não deveria existir
// router.get('/', loginRequired, userControllers.index);
// router.get('/:id', userControllers.show);

router.post('/',loginRequired,  userControllers.store);
router.put('/', loginRequired, userControllers.update);
router.delete('/', loginRequired, userControllers.delete);
export default router;

/*
 index --> Lista todos os usuarios -> GET
 store/create --> cria um novo usuario --> POST
 delete-> apaga um usuário --> DELETE
show--> mostra uma usuário -> GET
update--> atualiza uma usuário --> PATCH ou PUT
 */
