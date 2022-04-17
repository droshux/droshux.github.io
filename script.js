const svgs = document.getElementsByTagName("svg")
let dropdownArrows = [];
for (i=0; i<svgs.length; i++) {
    if (svgs[i].id.startsWith("dropdown")) {
        dropdownArrows.push(svgs[i]);
    }
}

for (i=0; i<dropdownArrows.length;i++) {
    dropdownArrows[i].addEventListener("click", function(event) {
        spinterval = setInterval(() => rotateItemB(event.target, 0), 50)
    })
}
const rotationSpeed = 60;
rotateItemF = item => {
    rotationValue=0
    if (rotationValue < 240) {
        item.style.transform = "rotate(" + rotationValue + "deg)";
        item.style.webkitTransform = "rotate(" + rotationValue + "deg)";
        item.style.mozTransform = "rotate(" + rotationValue + "deg)";
        rotationValue += rotationSpeed; 
    } else {
        clearInterval(spinterval)
    }
}
rotateItemB = item => {
    rotationValue = 180
    if (rotationValue < 0) {
        item.style.transform = "rotate(" + rotationValue + "deg)";
        item.style.webkitTransform = "rotate(" + rotationValue + "deg)";
        item.style.mozTransform = "rotate(" + rotationValue + "deg)";
        rotationValue -= rotationSpeed; 
    } else {
        clearInterval(spinterval)
    }
}