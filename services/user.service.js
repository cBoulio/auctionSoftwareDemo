const db = require('../config/db.config.js');

const ilance_users_TABLE = db.ilance_users;
const ilance_project_categories_TABLE = db.ilance_project_categories;

const ilance_subscription_user_TABLE = db.Sequelize;
const ilance_buynow_orders_TABLE = db.Sequelize;
const ilance_projects_TABLE = db.Sequelize;

var crypto = require('crypto');


exports.getData = async () => {
    return new Promise(async (resolve,reject) =>{

          ilance_users_TABLE.findAll().then(data => {
           
            resolve(data);  

          }).catch(err => {
            
            resolve(JSON.stringify({msg: 'Error', detail: err}));
            
          });
       
    });
};

exports.register = async (body) => {
    return new Promise(async (resolve,reject) =>{
        
        var salt = crypto.randomBytes(Math.ceil(5)).toString('hex').slice(0,5);

        var hashMd5 = crypto.createHash('md5').update(salt + body.password).digest("hex");


        let user = {
            first_name:""+body.first_name,
            last_name:body.last_name,
            email:body.email,
            password:hashMd5,
            salt:salt,
            date_added:2020-10-16,
            username:body.username
        }
        
        ilance_users_TABLE.create(user)  
        .then(function(data){  
            resolve(data)  
        }).catch(function(error){  
            console.log('Didnt work again')
            resolve(error)  
        })  
             
    });
};

exports.login = async (user, passedPassword) => {
    return new Promise(async (resolve,reject) =>{
        
        // split the password sting we pass in - - 
        const hashed = user.password;
        const salt = user.salt;
         // Hashing raw password submitted by the user 
        // to sign in third argument is the key length 
        // that must be same when hashing the password 
        // to store it into the database when user sign up 
        const hashedBuff = crypto.createHash('md5').update(salt + passedPassword).digest("hex");
     
        // Compare saved hashed of database and  
        // obtained hashed 
        const isValid = hashed === hashedBuff.toString('hex') 
            
        if (isValid) { 
        resolve('Sign In successfully') 
        } 
        resolve('Invalid Password')
    });
        
};

exports.getUser = async (username) => {
    return new Promise(async (resolve,reject) =>{
        ilance_users_TABLE.findOne({where: {username:username}}).then(user => {
            resolve(user);  
          }).catch(err => {
            resolve(JSON.stringify({msg: 'Error', detail: err}));
        });
    });
};

exports.getSession = async (body) => {
    return new Promise(async (resolve,reject) =>{
        resolve(req.session)
    });
};

exports.testAuth = async (body) => {
    return new Promise(async (resolve,reject) =>{
        resolve('Made it passed authorization');
    });
};