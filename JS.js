var whatCard = "top"
var startOfGame = true

var cardCount = 0

var statements = [1]
var equation = 0

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
        document.getElementById("bottomBlockText").innerHTML = equation
        setTimeout(function(){
            document.getElementById("cardCountText1").innerHTML = cardCount
            document.getElementById("cardCountText2").innerHTML = cardCount
        }, 1000)
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
        var num = Math.floor(Math.random() * 101)
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
            if (num < 10) {
            var symbol = "/"
            }
        }
        document.getElementById("bottomCardBottomText").innerHTML = symbol + num
    }
    else {
        bottomCardBin()
        setTimeout(function(){
            document.getElementById("bottomCard").style.zIndex = "1"
            document.getElementById("topCard").style.zIndex = "2"
        },3000);
        var symbolNum = Math.floor(Math.random() * 4)
        var num = Math.floor(Math.random() * 101)
        if (symbolNum === 0) {
            var symbol = "+"
        }
        else if (symbolNum === 1) {
            var symbol = "-"
        }
        else if (symbolNum === 2 & num <= 25) {
            var symbol = "*"
        }
        else if (symbolNum === 3 & num <= 15) {
            var symbol = "/"
        }
        else {
            var symbol = "+"
        }
        document.getElementById("topCardBottomText").innerHTML = symbol + num
    }
}
function apply() {
    cardCount += 1
    if (whatCard === "top") {
        topCardApply()
        setTimeout(function(){
            document.getElementById("bottomCard").style.zIndex = "2"
            document.getElementById("topCard").style.zIndex = "1"
        },3000);
        var symbolNum = Math.floor(Math.random() * 4)
        var num = Math.floor(Math.random() * 101)
        if (symbolNum === 0) {
            var symbol = "+"
        }
        else if (symbolNum === 1) {
            var symbol = "-"
        }
        else if (symbolNum === 2 & num <= 25) {
            var symbol = "*"
        }
        else if (symbolNum === 3 & num <= 15) {
            var symbol = "/"
        }
        else {
            var symbol = "+"
        }
        document.getElementById("bottomCardBottomText").innerHTML = symbol + num
        statements.push(document.getElementById("topCardBottomText").innerHTML)
        equation = statements.reduce((a, b) => a + b)

    }
    else {
        bottomCardApply()
        setTimeout(function(){
            document.getElementById("bottomCard").style.zIndex = "1"
            document.getElementById("topCard").style.zIndex = "2"
        },3000);
        var symbolNum = Math.floor(Math.random() * 4)
        var num = Math.floor(Math.random() * 101)
        if (symbolNum === 0) {
            var symbol = "+"
        }
        else if (symbolNum === 1) {
            var symbol = "-"
        }
        else if (symbolNum === 2 & num <= 25) {
            var symbol = "*"
        }
        else if (symbolNum === 3 & num <= 15) {
            var symbol = "/"
        }
        else {
            var symbol = "+"
        }
        document.getElementById("topCardBottomText").innerHTML = symbol + num
        statements.push(document.getElementById("bottomCardBottomText").innerHTML)
        equation = statements.reduce((a, b) => a + b)
        console.log(equation)
    }
}