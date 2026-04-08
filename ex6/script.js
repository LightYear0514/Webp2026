var container = document.getElementById('container');

window.onload = function() {

    add_new_chars(Math.floor(Math.random() * 3)); 
};

window.addEventListener("keyup", function(e) {
    var str = container.textContent;
    
    if (str.length > 0 && e.key === str[0]) {

        container.textContent = str.substring(1); 
    }
    
    var randomNum = Math.floor(Math.random() * 3) + 1;
    add_new_chars(randomNum);
});

function add_new_chars(num) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < num; i++) {

        var randChar = chars.charAt(Math.floor(Math.random() * chars.length));
        container.textContent += randChar;
    }
}