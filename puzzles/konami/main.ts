let puzzleRunning: boolean = false
const code: string = "UUDDLRLRBA"
let sequence: string = ""

basic.showString("R")

function checkSequence() {
    let correctCount: number = 0
    let length: number = Math.min(code.length, sequence.length)
    for (let index = 0; index < length; index++) {
        if (code.charAt(index) !== sequence.charAt(index)) {
            basic.showString("X")
            puzzleRunning = false
            return
        }
        correctCount++
    }
    if (correctCount === code.length) {
        puzzleRunning = false
        basic.showString("Y")
    } else {
        led.plotBarGraph(correctCount, code.length)
    }
}


input.onButtonPressed(Button.AB, () => {
    sequence = ""
    basic.showString("G")
    puzzleRunning = true
})

input.onButtonPressed(Button.A, () => {
    if (puzzleRunning) {
        sequence += "A"
        checkSequence()
    }
})
input.onButtonPressed(Button.B, () => {
    if (puzzleRunning) {
        sequence += "B"
        checkSequence()
    }
})
input.onGesture(Gesture.LogoUp, () => {
    if (puzzleRunning) {
        sequence += "U"
        checkSequence()
    }
})
input.onGesture(Gesture.LogoDown, () => {
    if (puzzleRunning) {
        sequence += "D"
        checkSequence()
    }
})
input.onGesture(Gesture.TiltLeft, () => {
    if (puzzleRunning) {
        sequence += "L"
        checkSequence()
    }
})
input.onGesture(Gesture.TiltRight, () => {
    if (puzzleRunning) {
        sequence += "R"
        checkSequence()
    }
})
