input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
})
input.onButtonPressed(Button.AB, function () {
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        strip.showRainbow(1, 360)
        strip.rotate(1)
        strip.show()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.rgb(18, 120, 23))
})
input.onGesture(Gesture.Shake, function () {
    strip.setPixelColor(0, neopixel.rgb(247, 49, 142))
    strip.setPixelColor(1, neopixel.rgb(247, 49, 142))
    strip.setPixelColor(2, neopixel.rgb(247, 49, 142))
    strip.setPixelColor(3, neopixel.rgb(247, 49, 142))
    strip.setPixelColor(4, neopixel.rgb(247, 49, 142))
    strip.setPixelColor(5, neopixel.rgb(130, 27, 209))
    strip.setPixelColor(6, neopixel.rgb(130, 27, 209))
    strip.setPixelColor(7, neopixel.rgb(130, 27, 209))
    strip.setPixelColor(8, neopixel.rgb(130, 27, 209))
    strip.setPixelColor(9, neopixel.rgb(130, 27, 209))
    strip.setPixelColor(10, neopixel.rgb(13, 42, 125))
    strip.setPixelColor(11, neopixel.rgb(13, 42, 125))
    strip.setPixelColor(12, neopixel.rgb(13, 42, 125))
    strip.setPixelColor(13, neopixel.rgb(13, 42, 125))
    strip.setPixelColor(14, neopixel.rgb(13, 42, 125))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
basic.forever(function () {
	
})
