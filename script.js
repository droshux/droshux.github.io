const svgs = document.getElementsByTagName("svg")
let dropdownArrows = [];
for (i=0; i<svgs.length; i++) {
    if (svgs[i].id.startsWith("dropdown")) {
        dropdownArrows.push(svgs[i]);
    }
}
//dropdownArrows.push(document.getElementById("body"))
for (i = 0; i < dropdownArrows.length; i++) {
    dropdownArrows[i].addEventListener("animationend", function (event) {
        //event.target.style.animation = "idle"
        if (event.target.getAttribute("data-rotated") == "0") {
            event.target.setAttribute("data-rotated", "1")
            dropdown = document.getElementById(event.target.getAttribute("data-imagesid"))
            dropdown.style.display = "block";
            
        } else {
            event.target.setAttribute("data-rotated", "0")
            dropdown = document.getElementById(event.target.getAttribute("data-imagesid"))
            dropdown.style.display = "none";
        }
    })
    dropdownArrows[i].addEventListener("click", function (event) {
        if (event.currentTarget.getAttribute("data-rotated") == "0") {
            event.currentTarget.style.animation = "spinUP 0.5s forwards"
        } else {
            event.currentTarget.style.animation = "spinDOWN 0.5s forwards"
        }
    })
}