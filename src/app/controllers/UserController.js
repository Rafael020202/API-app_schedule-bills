import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const userExists = await User.findOne({
      where: { email },
    });

    if (userExists) {
      return res.status(400)
        .json({ error: 'email already exists' });
    }

    const { id, name } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (user.email !== email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(401).json({ error: 'Email already in use' });
      }

      if (oldPassword && !(await user.comparePassword(oldPassword))) {
        return res.status(401).json({ error: 'Password invalid' });
      }
    }

    const { id, name } = await user.update(req.body);

    return res.json({ id, name, email });
  }

  async find(req, res) {
    const user = await User.findOne({
      where: { id: req.userId },
    });

    return res.json(user);
  }
}

export default new UserController();
