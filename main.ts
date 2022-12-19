radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showNumber(Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength)))
        Distance = Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    }
})
let Distance = 0
radio.setGroup(77)
radio.setTransmitPower(7)
OLED.init(128, 128)
basic.forever(function () {
    radio.sendNumber(0)
    if (Distance > 65) {
        OLED.writeStringNewLine("Ryujunhyuk")
        music.setVolume(255)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 40)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        OLED.clear()
    } else if (Distance < 65) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
