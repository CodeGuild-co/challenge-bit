let status = ""
input.onButtonPressed(Button.AB, function () {
    status = "stoptransmit"
})
input.onGesture(Gesture.FreeFall, function () {
    if (input.temperature() >= 25) {
        status = "solved"
    }
})
status = "key"
basic.forever(function () {
    if (status == "key") {
        basic.showString("key2")
        radio.sendString("signalStrengthTest2")
    } else if (status == "solved") {
        basic.showString("1")
    }
})