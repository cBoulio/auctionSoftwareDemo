var recordsArr;
var pagination = 2;
let totalPages = 0;
var pageArr = [];
var currentPageIndex = 0;

$(document).ready(function() {
    var api_url = 'http://localhost:8000/data/getData';
    var key = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8';// not real
    console.log('Here')
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

function createPages(records){
    if(records % 2 != 0){
        records++;
    }
    totalPages = records/pagination;
    for(let x=0;x<totalPages;x++){  
        let tbodyId = 'tbody'+x;
        pageArr.push(tbodyId);
        if(x == 0 ){
            $(dataTable).append("<tbody id="+tbodyId+" class='active'>1</tbody>");
        
        }else{
            $(dataTable).append("<tbody id="+tbodyId+" class='inactive'>1</tbody>");
        }
    }
}

function populatePages(records){

    let pageCounter = 0; //pagination // 2 
    let page = '#'+pageArr[pageCounter];

    for(let x=0; x< records.length; x++){
        page = '#'+pageArr[pageCounter];
        $(page).append("<tr>"+
        "<td>"+records[x].project_title+"</td>"+
        "<td>"+records[x].username+"</td>"+
        "<td>"+records[x].category+"</td>"+
        "</tr>");

        if((x+1) % pagination == 0){
            pageCounter++;
        }   
    }
}


function back(){
    let page = '#'+pageArr[currentPageIndex];
    if(currentPageIndex != 0 ){
        $(page).addClass('inactive').removeClass('active');
        currentPageIndex--
        page = '#'+pageArr[currentPageIndex];
        $(page).addClass('active').removeClass('inactive');
    }
}

function forward(){
    let page = '#'+pageArr[currentPageIndex];
    if(currentPageIndex != (totalPages-1)){
        $(page).addClass('inactive').removeClass('active');
        currentPageIndex++
        page = '#'+pageArr[currentPageIndex];
        $(page).addClass('active').removeClass('inactive');
    }
}


function sortBy(){
    var selector = document.getElementById('sel1');
    console.log(recordsArr)
    for(var x = 0 ; x<pageArr.length; x++){
        let page = '#'+pageArr[currentPageIndex];
        $(page).remove();
    }
    
    switch(selector.value) {
        case 'Username':
            recordsArr.sort((a, b) => {
                let fa = a.username.toLowerCase(),
                    fb = b.username.toLowerCase();
                
                if (fa > fb) {
                    return -1;
                }
                if (fa < fb) {
                    return 1;
                }
                return 0;
            });
          break;
        case 'Category':
            recordsArr.sort((a, b) => {
                let fa = a.category.toLowerCase(),
                    fb = b.category.toLowerCase();
                
                if (fa > fb) {
                    return -1;
                }
                if (fa < fb) {
                    return 1;
                }
                return 0;
            });
            break;
        case 'Projects':
            recordsArr.sort((a, b) => {
                let fa = a.project_title.toLowerCase(),
                    fb = b.project_title.toLowerCase();
                
                if (fa > fb) {
                    return 1;
                }
                if (fa < fb) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'Recent':
            recordsArr.sort((a, b) => {
                return a.date_added - b.date_added;
            });
            break;
        default:
            console.log('def')
            break;
    }


      // sort array 
    createPages(recordsArr.length);
    populatePages(recordsArr);


      
  

    

}