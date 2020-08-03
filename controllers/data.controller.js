const {asyncHandler} = require('../utils/async_handler.util');
const DataService = require('../services/data.service');

exports.getData = asyncHandler(async (req,res) => {

    let dataResponse = await DataService.getData();
    if(!dataResponse){
        return HELPER.sendResponse(res, 404, 'Error')
    }
    
    return HELPER.sendResponse(res, 200, dataResponse);
    
});


