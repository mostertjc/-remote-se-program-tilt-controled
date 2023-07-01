enum RadioMessage {
    message1 = 49434,
    message2 = 1435,
    message3 = 31126,
    message4 = 29926,
    message5 = 42976,
    message6 = 19755,
    mes7 = 14617,
    mes8 = 8286
}
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -500) {
        radio.sendMessage(RadioMessage.mes7)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.Y) > 500) {
        radio.sendMessage(RadioMessage.mes8)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) > 500) {
        radio.sendMessage(RadioMessage.message2)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) < -500) {
        radio.sendMessage(RadioMessage.message1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        radio.sendMessage(RadioMessage.message3)
    }
})
