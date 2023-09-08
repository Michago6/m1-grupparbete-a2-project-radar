basic.showNumber(1)
basic.forever(function () {
    radio.setGroup(114)
    radio.sendNumber(0)
    radio.setGroup(118)
    radio.sendNumber(0)
    basic.pause(3000)
})
