let status = ""
input.onButtonPressed(Button.AB, function () {
    status = "showClue"
})
input.onGesture(Gesture.Shake, function () {
    if (input.temperature() >= 25) {
        status = "solved"
    }
})
status = "key"
basic.forever(function () {
    if (status == "key") {
        basic.showString("key")
        radio.sendString("signalStrengthTest")
    } else if (status == "showClue") {
        basic.showString("first clue: drop it like its hot")
    } else if (status == "solved") {
        basic.showString("3")
    }
})