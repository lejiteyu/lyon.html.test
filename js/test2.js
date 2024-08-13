$(function(){

    function updateCSTTime() {
        const cstTimeDiv = document.getElementById('cstTime');

        // 獲取當前時間
        const now = new Date();

        // 獲取 UTC 時間並加上 8 小時（中原標準時間是 UTC+8）
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 6000);
        const cstTime = new Date(utcTime + (3600000 * 8));

        // 格式化時間為 "YYYY-MM-DD HH:mm:ss"
        const year = cstTime.getFullYear();
        const month = String(cstTime.getMonth() + 1).padStart(2, '0');
        const day = String(cstTime.getDate()).padStart(2, '0');
        const hours = String(cstTime.getHours()).padStart(2, '0');
        const minutes = String(cstTime.getMinutes()).padStart(2, '0');
        const seconds = String(cstTime.getSeconds()).padStart(2, '0');

        const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        // 在頁面上顯示時間
        cstTimeDiv.innerHTML = `Time: ${formattedTime}`;
    }

    // 更新時間
    updateCSTTime();

    // 每秒更新一次
    setInterval(updateCSTTime, 1000);

    $('#nextPageButton').click(function() {
        window.history.back();
    })
})