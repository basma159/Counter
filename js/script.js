
var pulse = document.getElementById("pulse")
var num = document.getElementById("number")
var minus = document.getElementById("minus")
var reset = document.getElementById("reset")
var click =document.createElement("audio")
var counter = 0
num.innerText = counter

pulse.onclick = function () {
    counter++
    num.innerText = (counter)
    click.play()
}

minus.onclick = function () {

    if (counter > 0) {
        counter--
        num.innerText = (counter)

    }
}

reset.onclick = function () {
    counter = 0
    num.innerText = (counter)
}

