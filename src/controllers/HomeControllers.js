import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const alunos = await Aluno.create({
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
export default new HomeController();
