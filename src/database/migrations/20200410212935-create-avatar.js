module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('users', 'avatar_id', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: { model: 'files', key: 'id' },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  }),

  down: (queryInterface) => queryInterface.removeColumn('users', 'avatar_id'),
};
