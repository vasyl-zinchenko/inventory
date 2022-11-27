import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dzencode', 'postgres', 'test124', {
  host: 'localhost',
  dialect: 'postgres',
});
