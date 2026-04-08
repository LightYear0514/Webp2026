function createbutton() {

    var btn = document.createElement("BUTTON"); 

    btn.innerHTML = "A BRAND NEW BUTTON"; 

    btn.setAttribute("id", "newBtn"); 

    document.body.appendChild(btn); 
}

function deletebutton() {

    var btn = document.getElementById("newBtn");

    if (btn) {
        document.body.removeChild(btn);
    }
}