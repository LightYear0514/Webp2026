// 1. 定義 API 網址 [cite: 1024]
var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

// 2. 初始化 XMLHttpRequest 物件 [cite: 863]
var xhr = new XMLHttpRequest();

// 3. 設定連線方式為 GET 並發送請求 [cite: 864, 865]
xhr.open('GET', openUrl, true);
xhr.send();

// 4. 監聽狀態變化 [cite: 866]
xhr.onreadystatechange = function() {
    // 當 readyState 為 4 且 status 為 200 時代表成功 [cite: 855, 868]
    if (this.readyState == 4 && this.status == 200) {
        // 將回傳的 JSON 字串轉換為物件 [cite: 874, 955]
        var dataset = JSON.parse(this.responseText);
        addNewData(dataset);
    }
};

// 5. 將資料加入表格的函式 [cite: 963]
function addNewData(dataset) {
    var myTable = document.getElementById("csie");
    
    // 遍歷資料陣列 [cite: 971]
    dataset.forEach(function(data) {
        // 在表格最後新增一行 [cite: 973]
        var row = myTable.insertRow(-1);
        
        // 插入各項欄位資料 [cite: 974, 975, 976]
        row.insertCell(0).innerHTML = data['title'];
        row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
        row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
    });
}

// 6. 刪除最後一筆資料的函式 (輔助功能) [cite: 424]
function deloldData() {
    var myTable = document.getElementById("csie");
    var rowCount = myTable.rows.length;
    
    // 確保不刪除標題列 (rowCount > 1) [cite: 431]
    if (rowCount > 1) {
        myTable.deleteRow(rowCount - 1); // [cite: 433]
    }
}