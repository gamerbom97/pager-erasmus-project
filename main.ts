radio.onReceivedNumber(function on_received_number(number: number) {
    
    recieving_number = true
    recieved_number = number
})
function show_number(number2: number) {
    if (number2 == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    
    if (number2 == 1) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    
    if (number2 == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    
    if (number2 == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    
    if (number2 == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    
    if (number2 == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    
    if (number2 == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    
    if (number2 == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    
    if (number2 == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    
    if (number2 == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    
}

let recieved_number = 0
let recieving_number = false
let current_number = 0
input.onButtonPressed(1, function button_a() {
    
    current_number += 1
    if (current_number == 10) {
        current_number = 0
    }
    
    show_number(current_number)
    basic.pause(100)
})
input.onButtonPressed(2, function button_b() {
    radio.sendNumber(current_number)
    basic.pause(100)
})
basic.forever(function on_forever() {
    
    if (recieving_number) {
        show_number(recieved_number)
        led.plotBrightness(0, 0, 20)
        led.plotBrightness(0, 4, 20)
        led.plotBrightness(4, 4, 20)
        led.plotBrightness(4, 0, 20)
        basic.pause(5000)
        recieving_number = false
    } else {
        show_number(current_number)
    }
    
})
