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