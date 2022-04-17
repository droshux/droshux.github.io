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
    dropdownArrows[i].addEventListener("click", function(event) {
        if (rval%360 < 240) {
            t = Math.floor(rval/360)*360 + 240
        } else {
            t = Math.floor(rval/360)*360 + 420
        }
        spinterval = setInterval(() => rotateItem(event.target, t), 75)
    })
}

const rotationSpeed = 60;
function rotateItem(item, target) {
    rval = parseInt(item.getAttribute("data-rotationvalue"))
    if (rval < target) {
        item.style.transform = "rotate(" + rval + "deg)";
        item.style.webkitTransform = "rotate(" + rval + "deg)";
        item.style.mozTransform = "rotate(" + rval + "deg)";
        rval += rotationSpeed;
        item.setAttribute("data-rotationvalue", String(rval)); 
    } else {
        clearInterval(spinterval)
    }
}