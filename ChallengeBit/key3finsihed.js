let status = "key"
input.onButtonPressed(Button.AB, function () {
    status = "showClue"
})
basic.forever(function () {
    if (status == "solved") {
        basic.showString("5")
    } else if (status == "key") {
        basic.showString(" key3")
        radio.sendString("signalStrengthTest3")
    } else if (input.compassHeading() <= 150 && input.compassHeading() >= 80 && input.lightLevel() >= 100) {
        status = "halfsolved"
        basic.showString("key3")
    } else if (status == "halfsolved" && input.lightLevel() <= 50 && input.compassHeading() >= 250 && input.compassHeading() <= 280) {
        status = "solved"
    } else if (status == "showClue") {
    }


})