const {asyncHandler} = require('../utils/async_handler.util');
const UserService = require('../services/user.service');
const TokenService = require('../services/token.service');
const jwt = require("jsonwebtoken");

exports.login = asyncHandler(async (req,res) => {

    let getUser = await UserService.getUser(req.body.username);
    if(!getUser){
        return HELPER.sendResponse(res, 404, 'Invalid Username')
    }
    let loginResponse = await UserService.login(getUser, req.body.password);
    if(!loginResponse){
        return HELPER.sendResponse(res, 404, 'Wrong Password')
    }
    let genToken = await TokenService.generateToken(getUser, req);
    return HELPER.sendResponse(res, 200, genToken);
    
});


exports.register = asyncHandler(async (req,res) => {

    let registerResponse = await UserService.register(req.body);
    if(!registerResponse){
        return HELPER.sendResponse(res, 404, 'beans')
    }
    
    
    let genToken = await TokenService.generateToken(registerResponse, req);
    return HELPER.sendResponse(res, 200, genToken);
    
});

exports.getSession = asyncHandler(async (req,res) => {

    let session = {

        id:req.sessionID,
        session:req.session

    }
    return HELPER.sendResponse(res, 200, session);
    
});

exports.checkSession = asyncHandler(async (req,res) =>{

    console.log(req.body.sessionID);
    var session;

    if(req.body.sessionID != req.sessionID){
        return HELPER.sendResponse(res, 404, 'Not a valid session');
    }else{
        session = {
            id:req.sessionID,
            session:req.session
        }
    }

    return HELPER.sendResponse(res, 200, session);

});

exports.checkToken = asyncHandler(async (req,res) =>{

    let token = req.headers["x-access-token"];
    
    if (!token) {
        return res.status(403).send({
          message: "No token provided!"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Unauthorized!"
          });
        }
        console.log(decoded.data.sessionId);
        return HELPER.sendResponse(res, 200, decoded.data);
    });



});


exports.testAuth = asyncHandler(async (req,res) => {

    let authResponse = await UserService.testAuth();

    if(!authResponse){
        return HELPER.sendResponse(res, 404, 'Error')
    }

    return HELPER.sendResponse(res, 200, authResponse);
    
});




