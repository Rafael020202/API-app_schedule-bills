import Sequelize, { Model } from 'sequelize';

class Bill extends Model {
  static init(sequelize) {
    super.init(
      {
        barcode: Sequelize.STRING,
        classification: Sequelize.STRING,
        description: Sequelize.STRING,
        provider: Sequelize.STRING,
        observation: Sequelize.STRING,
        emission_at: Sequelize.DATE,
        expire_at: Sequelize.DATE,
        paid_at: Sequelize.DATE,
        value: Sequelize.FLOAT,
      },
      {
        sequelize,
      },

    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Bill;
