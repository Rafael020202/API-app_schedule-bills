module.exports = {
  host: '192.168.99.100',
  port: '5432',
  dialect: 'postgres',
  username: 'postgres',
  password: 'docker',
  database: 'gorevision',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
