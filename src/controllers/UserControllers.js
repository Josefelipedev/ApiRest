import User from '../models/Users';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400)
        .json({
          errors: e.errors.map((err) => err.message),
        });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      // console.log('User', req.userId);
      // console.log('Email', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400)
          .json({
            erros: ['Usuário não existe.'],
          });
      }
      const novoDados = await user.update(req.body);
      const { id, nome, email } = novoDados;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400)
        .json({
          errors: e.errors.map((err) => err.message),
        });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400)
          .json({
            erros: ['Usuário não existe.'],
          });
      }
      await user.destroy();
      return res.json(null);
    } catch (e) {
      console.log(e);
      return res.status(400)
        .json({
          errors: e.errors.map((err) => err.message),
        });
    }
  }
}

export default new UserController();
