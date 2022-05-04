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
        
    })
}

function rotateItem(item, target) {
    
}