import Bill from '../models/Bill';
import User from '../models/User';

class BillController {
  async index(req, res) {
    const { page = 1 } = req.params;

    const bills = await Bill.findAll({
      where: { user_id: req.userId, paid_at: null },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(bills);
  }

  async store(req, res) {
    const bill = await Bill.create({
      ...req.body,
      user_id: req.userId,
    });

    return res.json(bill);
  }

  async update(req, res) {
    let bill = await Bill.findOne({
      where: { id: req.params.id },
    });

    bill = await bill.update(req.body);

    return res.json(bill);
  }

  async delete(req, res) {
    const bill = await Bill.findOne({
      where: { id: req.params.id },
    });

    bill.paid_at = new Date();

    await bill.save();

    return res.json(bill);
  }

  async find(req, res) {
    const bill = await Bill.findOne({
      where: { id: req.params.id },
    });

    return res.json(bill);
  }
}

export default new BillController();
