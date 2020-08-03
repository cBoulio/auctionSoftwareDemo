
const Sequelize = require('sequelize');
const sequelize = new Sequelize('chaddb','root', 'toor', { 
  host:'localhost',
  port: 3306,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire:30000,
    idle: 10000
  }
});
 
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database');
  });

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ilance_buynow_orders = require('../models/ilance_buynow_orders.model.js')(sequelize, Sequelize);
db.ilance_projects = require('../models/ilance_projects.model.js')(sequelize, Sequelize);
db.ilance_subscription_user = require('../models/ilance_subscription_user.model.js')(sequelize, Sequelize);
db.ilance_users = require('../models/ilance_users.model.js')(sequelize, Sequelize);
db.ilance_project_categories = require('../models/ilance_project_categories.model.js')(sequelize, Sequelize);




module.exports = db;