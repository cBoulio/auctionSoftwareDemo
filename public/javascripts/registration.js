$(document).ready(function() {
    var api_url = 'http://localhost:8080/data/getData';
    var key = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8';// not real
    
    $.ajax({
        url: api_url,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){

            recordsArr = result;
            createPages(recordsArr.length);
            populatePages(recordsArr);
           
        }
    })
    
});