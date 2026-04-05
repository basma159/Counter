
var pulse = document.getElementById("pulse")
var num = document.getElementById("number")
var minus = document.getElementById("minus")
var reset = document.getElementById("reset")
var click1 = new Audio("audios/mixkit-hard-typewriter-click-1119.wav")
var click2 = new Audio("audios/mixkit-mouse-click-close-1113.wav")
var click3 = new Audio("audios/mixkit-handgun-click-1660.mp3")

var counter = 0
num.innerText = counter

pulse.onclick = function () {
    counter++
    num.innerText = (counter)
    click1.play()
}

minus.onclick = function () {

    if (counter > 0) {
        counter--
        num.innerText = (counter)
        click2.play()
    }
}

reset.onclick = function () {
    counter = 0
    num.innerText = (counter)
    click3.play()

}

