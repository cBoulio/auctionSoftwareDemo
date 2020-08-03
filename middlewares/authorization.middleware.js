
const jwt = require("jsonwebtoken");

exports.validateToken = (req,res,next) => {
    let token = req.headers['x-access-token']; // Express headers are auto converted to lowercase
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
       if (err) {
        return res.status(401).send({
            message: "Unauthorized!"
        });
        }
        req.userId = decoded.id;
        req.roleId = decoded.roleId;
        next(); 
    });
};

exports.validUser = (req,res,next) => {
    if(req.roleId != 0){
        return res.status(401).send({
            message: "Unauthorized User"
        });
    }
    next();
};

exports.validSubscriptionUser = (req,res,next) => {
    if(req.roleId != 2){
        return res.status(401).send({
            message: "Unauthorized Subscription User"
        });
    }
    next();
};

exports.validAdmin = (req,res,next) => {
    if(req.roleId != 1){
        return res.status(401).send({
            message: "Unauthorized Admin User"
        });
    }
    next();
};

