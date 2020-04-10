import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import User from '../app/models/User';
import Bill from '../app/models/Bill';
import File from '../app/models/File';

const models = [Bill, User, File];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connetion = new Sequelize(dbConfig);
    models
      .map((model) => model.init(this.connetion))
      .map((model) => model.associate && model.associate(this.connetion.models));
  }
}

export default new DataBase();
