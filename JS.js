var whatCard = "top"
var startOfGame = true

var statements = ["1"]

function start() {
    if (startOfGame === true) {
        document.getElementById("bin").innerHTML = "Bin"
        document.getElementById("bin").setAttribute( "onClick", "javascript: bin();" );
        document.getElementById("apply").innerHTML = "Apply"
        document.getElementById("apply").setAttribute( "onClick", "javascript: apply();" );
        bin()
        startOfGame = false

        // AHHHHHHHHHH BUGS :[
    }
        document.getElementById("bottomBlockText").innerHTML = statements
}

function topCardBin() {
    document.getElementById("topCard").style.animationName = "topCardFly"
    whatCard = "bottom"
    setTimeout(function(){
        document.getElementById("topCard").style.animationName = ""
    }, 3400)
}
function bottomCardBin() {
    document.getElementById("bottomCard").style.animationName = "topCardFly"
    whatCard = "top"
    setTimeout(function(){
        document.getElementById("bottomCard").style.animationName = ""
    }, 3400)
}

function topCardApply() {
    document.getElementById("topCard").style.animationName = "topCardFall"
    whatCard = "bottom"
    setTimeout(function(){
        document.getElementById("topCard").style.animationName = ""
    }, 3400)
}
function bottomCardApply() {
    document.getElementById("bottomCard").style.animationName = "topCardFall"
    whatCard = "top"
    setTimeout(function(){
        document.getElementById("bottomCard").style.animationName = ""
    }, 3400)
}


function bin() {
    if (whatCard === "top") {
        topCardBin()
        setTimeout(function(){
            document.getElementById("bottomCard").style.zIndex = "2"
            document.getElementById("topCard").style.zIndex = "1"
        },3000);
        var symbolNum = Math.floor(Math.random() * 4)
        if (symbolNum === 0) {
            var symbol = "+"
        }
        else if (symbolNum === 1) {
            var symbol = "-"
        }
        else if (symbolNum === 2) {
            var symbol = "×"
        }
        else if (symbolNum === 3) {
            var symbol = "÷"
        }
        var num = Math.floor(Math.random() * 101)
        document.getElementById("bottomCardBottomText").innerHTML = symbol + num
    }
    else {
        bottomCardBin()
        setTimeout(function(){
            document.getElementById("bottomCard").style.zIndex = "1"
            document.getElementById("topCard").style.zIndex = "2"
        },3000);
        var symbolNum = Math.floor(Math.random() * 4)
        if (symbolNum === 0) {
            var symbol = "+"
        }
        else if (symbolNum === 1) {
            var symbol = "-"
        }
        else if (symbolNum === 2) {
            var symbol = "×"
        }
        else if (symbolNum === 3) {
            var symbol = "÷"
        }
        var num = Math.floor(Math.random() * 101)
        document.getElementById("topCardBottomText").innerHTML = symbol + num
    }
}
function apply() {
    if (whatCard === "top") {
        topCardApply()
        setTimeout(function(){
            document.getElementById("bottomCard").style.zIndex = "2"
            document.getElementById("topCard").style.zIndex = "1"
        },3000);
        var symbolNum = Math.floor(Math.random() * 4)
        if (symbolNum === 0) {
            var symbol = "+"
        }
        else if (symbolNum === 1) {
            var symbol = "-"
        }
        else if (symbolNum === 2) {
            var symbol = "*"
        }
        else if (symbolNum === 3) {
            var symbol = "/"
        }
        var num = Math.floor(Math.random() * 101)
        document.getElementById("bottomCardBottomText").innerHTML = symbol + num
        statements.push(document.getElementById("topCardBottomText").innerHTML)
    }
    else {
        bottomCardApply()
        setTimeout(function(){
            document.getElementById("bottomCard").style.zIndex = "1"
            document.getElementById("topCard").style.zIndex = "2"
        },3000);
        var symbolNum = Math.floor(Math.random() * 4)
        if (symbolNum === 0) {
            var symbol = "+"
        }
        else if (symbolNum === 1) {
            var symbol = "-"
        }
        else if (symbolNum === 2) {
            var symbol = "*"
        }
        else if (symbolNum === 3) {
            var symbol = "/"
        }
        var num = Math.floor(Math.random() * 101)
        document.getElementById("topCardBottomText").innerHTML = symbol + num
        statements.push(document.getElementById("bottomCardBottomText").innerHTML)
    }
}