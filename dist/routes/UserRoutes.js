"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllers = require('../controllers/UserControllers'); var _UserControllers2 = _interopRequireDefault(_UserControllers);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();
// Não deveria existir
// router.get('/', loginRequired, userControllers.index);
// router.get('/:id', userControllers.show);

router.post('/',_loginRequired2.default,  _UserControllers2.default.store);
router.put('/', _loginRequired2.default, _UserControllers2.default.update);
router.delete('/', _loginRequired2.default, _UserControllers2.default.delete);
exports. default = router;

/*
 index --> Lista todos os usuarios -> GET
 store/create --> cria um novo usuario --> POST
 delete-> apaga um usuário --> DELETE
show--> mostra uma usuário -> GET
update--> atualiza uma usuário --> PATCH ou PUT
 */
