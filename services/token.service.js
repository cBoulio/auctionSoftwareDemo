const db = require('../config/db.config.js');
const jwt = require("jsonwebtoken");

exports.generateToken = async (user, req) => {
    return new Promise(async (resolve,reject) =>{

        var token = jwt.sign({ id:user.user_id, roleId:user.role }, process.env.JWT_SECRET, {
            expiresIn: 300 // 24 hours
        });
        
        let data = {

            id:user.user_id,
            username:user.username,
            email: user.email,
            accessToken:token
        }

        resolve(data);
            
    });
};


