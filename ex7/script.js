var container = document.getElementById('container');
var counter = 0; // 新增：用來記錄連續打錯的次數 [cite: 212, 246]

window.onload = function() {
    // 初始產生 3 個亂數字元 [cite: 127, 191]
    container.textContent = add_new_chars(3); 
};

window.addEventListener("keyup", function(e) {
    // 取得目前字串的第一個字元 [cite: 146, 216]
    var firstone = container.textContent.substring(0, 1);
    
    if (e.key === firstone) {
        // 如果打對了：消除第一個字，並將錯誤計數歸零 [cite: 151, 218, 234]
        container.textContent = container.textContent.substring(1);
        counter = 0; 
    } else {
        // 如果打錯了：增加錯誤計數 [cite: 220]
        container.textContent += e.key;
        counter++;
        
        // 核心邏輯：連續打錯三次 [cite: 167, 220]
        if (counter >= 3) {
            // 額外增加 3 個亂數字元 [cite: 168, 233]
            container.textContent += add_new_chars(3);
            // 觸發後將計數歸零，重新計算連續錯誤 [cite: 234]
            counter = 0; 
        }
    }
    
    // 原本的需求：每次按鍵（不論對錯）都會增加 1~3 個亂數字元 [cite: 115, 160, 307]
    var randomNum = Math.floor(Math.random() * 3) + 1;
    container.textContent += add_new_chars(randomNum);
});

function add_new_chars(num) {
    var str = '';
    for (var i = 0; i < num; i++) {
        // 產生 a-z 的隨機字元 
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}