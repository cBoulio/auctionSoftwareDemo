const express = require('express');
const router = express.Router();

const DataController = require('../controllers/data.controller')

router.get('/getData', DataController.getData);


module.exports = router;
