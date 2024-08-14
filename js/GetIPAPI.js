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