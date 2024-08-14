$(function() {
    var TAG = 'test 1. js';
    
   
    $('#nextPageButton').click(function() {
        var hrefPath = './test2.html'
        document.location.href = hrefPath;
    })

    GetIPAPI.getData(function(data, API_PATH_URL){
        Log.d(TAG, "20230428 getIP response:" + data);
        $('#myIp').text(data);
    })
});