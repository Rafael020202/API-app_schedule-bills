module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('bills', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
    },

    barcode: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    classification: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    provider: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    observation: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    emission_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    expire_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    value: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },

    paid_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),

  down: (queryInterface) => queryInterface.dropTable('bills'),
};
