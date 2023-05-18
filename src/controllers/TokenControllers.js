import User from '../models/Users';

class TokenController {
  async store(req, res) {
    res.json('OK');
  }
}

export default new TokenController();
