// By Patryk

input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SPEED)
        for (let index = 0; index < 10; index++) {
            music.playTone(988, music.beat(BeatFraction.Sixteenth))
            basic.pause(100)
        }
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else if (receivedString == "AB") {
        SPEED += 50
        if (SPEED > 255) {
            item = 10
        }
    } else if (false) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 74)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 74)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let item = 0
let SPEED = 0
radio.setGroup(41)
SPEED = 100
 