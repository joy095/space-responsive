var header = document.getElementById("header-links");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var destination = document.getElementById("destination-link-wrap");
var btns = destination.getElementsByClassName("destination-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// header-links-mobile link
var links = document.getElementById("header-links-mobile");
var btns = links.getElementsByClassName("link-stage");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// header-links-mobile handburger
function toggle() {
    var x = document.getElementById("header-links-mobile");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}