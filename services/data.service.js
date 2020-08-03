const db = require('../config/db.config.js');


const Sequelize = require('sequelize');
const Op = Sequelize.Op


const ilance_users_TABLE = db.ilance_users;
const ilance_project_categories_TABLE = db.ilance_project_categories;

const ilance_subscription_user_TABLE = db.Sequelize;
const ilance_buynow_orders_TABLE = db.Sequelize;
const ilance_projects_TABLE = db.ilance_projects;
var mysql = require('mysql');

exports.getData = async () => {
    return new Promise(async (resolve,reject) =>{

      var conn = mysql.createConnection({
        host: 'localhost', // Replace with your host name
        user: 'root',      // Replace with your database username
        password: 'toor',      // Replace with your database password
        database: 'chaddb' // // Replace with your database Name
      }); 
      conn.connect(function(err) {
        if (err) throw err;
        
        conn.query("SELECT ilance_users.username, project_title, ilance_project_categories.category, ilance_projects.date_added FROM ilance_users JOIN ilance_projects ON ilance_users.user_id = ilance_projects.user_id LEFT JOIN ilance_project_categories ON ilance_projects.cid = ilance_project_categories.cid", function (err, result, fields) {
          if (err) throw err;
          console
          resolve(result)
        });

     

      });

   
       
    });
};



