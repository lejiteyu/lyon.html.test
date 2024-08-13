$(function() {
    var TAG = 'test 1. js';
    var GetIPAPI ={
        tokenRetry: 3,
        isText: false,
        getData: function(callback) {
            var TAG = "GetIPAPI";
            Log.d(TAG, "20220110 Get GetIPAPI Api start!");
            var apiUrl = "https://vo.video.friday.tw/ip.jsp";//web 無法使用
            apiUrl ='https://api.ipify.org?format=json';
            Log.d(TAG, "20220110 Get Api apiUrl:" + apiUrl);
            
            
            $.getJSON(apiUrl, function(data) {
                Log.d(TAG,' 您的本機端 IP 地址為：' + data.ip);
                callback(data.ip,apiUrl)
            });
        },
        connect:function(callback){
            var TAG = "GetIPAPI";
            Log.d(TAG, "20220110 Get GetIPAPI Api start!");
            var apiUrl = "https://vo.video.friday.tw/ip.jsp";//web 無法使用
            apiUrl ='https://api.ipify.org?format=json';
            Log.d(TAG, "20220110 Get Api apiUrl:" + apiUrl);
            
            
            $.getJSON(apiUrl, function(data) {
                Log.d(TAG,' 您的本機端 IP 地址為：' + data.ip);
                callback(data,apiUrl)
            });
        }
        
    }
    var Log = {
        isDebug: true,
        d: function(TAG, msg) {
            if (Log.isDebug)
                console.log(TAG + " debug, \t\t" + msg);
        },
        e: function(TAG, msg ,error) {
            if (Log.isDebug){
                if(error!=undefined){
                    console.error(TAG + " Error,\t\t" + msg+" \n "+error.message+" \t 發生在程式碼的第 "+error.lineNumber+" 行");
                }else{
                    console.error(TAG + " Error,\t\t" + msg);
                }
                
            }
             
        }
        
    }
    $('#nextPageButton').click(function() {
        var hrefPath = './test2.html'
        document.location.href = hrefPath;
    })

    GetIPAPI.getData(function(data, API_PATH_URL){
        Log.d(TAG, "20230428 getIP response:" + data);
        $('#myIp').text(data);
    })
});