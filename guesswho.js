// document.body.style.backgroundColor = "blue";

for (i=0; i<(document.querySelectorAll(".name_but > button")).length; i++) {
    document.querySelectorAll(".name_but > button")[i].addEventListener("click", function() {
        this.innerHTML = flipHTML(this.innerHTML);
        swapPhoto(this.classList);
    })
}

document.querySelector("#player-sel").addEventListener("click", function() {
    exec();
})

function exec() {
    const dudesWhoGotThereOnMeritAlone = [
        "Andrej Pogacnik",
        "Angelo Zigon",
        "Georg Pintar",
        "Gerfried Falb",
        "Gerold Lenz",
        "Hartwig Schindler",
        "Helmut Zehentner",
        "Karl Grossauer",
        "Konrad Gornik",
        "Lucas Artner",
        "Marko Pavlinjek",
        "Marko Zibert",
        "Markus Querner",
        "Martin Muellegger",
        "Martin Sipser",
        "Michael Loibl",
        "Michael Proprenter",
        "Peter Mayr",
        "Peter Woetzinger",
        "Wolfgang Unterberger"
    ]
    var choice = (dudesWhoGotThereOnMeritAlone[(Math.floor((Math.random()*20) + 1))]);
    alert("Your executive is " + choice);
    document.querySelector("#my-exec").innerHTML = choice;
}

function flipHTML(inHTML) {
    if (inHTML == "flip down")
        return "flip up";
    else 
        return "flip down";
}

function swapPhoto(name) {
    var nameHTMLSel = "#" + name + " .name_but > p";
    var selHTML = document.querySelector(nameHTMLSel);
    // alert(selHTML);
    // alert(selHTML.innerHTML);
    selHTML.classList.toggle("flipped-down");
    // alert(selHTML.classList);
    if (isBackSide(name)){
        toBlankSwap(name);
    } else {
        toMilkToastSwap(name);
    }
}

function toBlankSwap(name) {
    var selectorName = "#" + name + " .pic";
    document.querySelector(selectorName).src = "./resources/guess-who-back-.png"
}

function toMilkToastSwap(name) {
    var picSelector = "./resources/" + name + ".png";
    var selectorName = "#" + name + " .pic";
    document.querySelector(selectorName).src = picSelector;
}

function isBackSide(name) {
    var tempSelector = "#" + name + " .pic";
    var srcName = document.querySelector(tempSelector).src;
    
    var j = srcName.length - 1;
    while (srcName[j] != "/") {
        j --;
    }
    j++;
    var strComp = "";
    while (j < (srcName.length - 4)) {
        strComp += srcName[j];
        j++;
    }
    var nameComp = String(name);
    
    for (i=0; i<(strComp.length - 1); i++) {
        if (nameComp[i] != strComp[i]) {
        return false;
        }
    }
    return true;
}