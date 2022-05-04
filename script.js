const svgs = document.getElementsByTagName("svg")
let dropdownArrows = [];
for (i=0; i<svgs.length; i++) {
    if (svgs[i].id.startsWith("dropdown")) {
        dropdownArrows.push(svgs[i]);
    }
}

for (i=0; i<dropdownArrows.length;i++) {
    dropdownArrows[i].setAttribute("data-rotationvalue", String(0));
    rval = parseInt(dropdownArrows[i].getAttribute("data-rotationvalue"))
    dropdownArrows[i].addEventListener("animationend", function (event) {
        //event.target.style.animation = "idle"
        if (event.target.getAttribute("data-rotated") == "0") {
            event.target.setAttribute("data-rotated", "1")
        } else {
            event.target.setAttribute("data-rotated", "0")
        }
    })
    dropdownArrows[i].addEventListener("click", function (event) {
        if (event.target.getAttribute("data-rotated") == "0") {
            event.target.style.animation = "spinUP 0.5s forwards"
        } else {
            event.target.style.animation = "spinUP 0.5s forwards"
        }
    })
}

function rotateItem(item, target) {
    
}