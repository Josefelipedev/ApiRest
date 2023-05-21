"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
  async index(req, res) {
    const alunos = await _Aluno2.default.create({
      nome: 'João',
      sobrenome: 'felipe',
      email: 'tugrp@example.com',
      idade: 20,
      telefone: '(21) 9 9999-9999',
      peso: 80,
      altura: 1.75,

    });

    res.json(alunos);
  }
}
exports. default = new HomeController();
