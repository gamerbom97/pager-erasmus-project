def on_received_number(number):
    global recieving_number, recieved_number
    recieving_number = True
    recieved_number = number
radio.on_received_number(on_received_number)

def show_number(number2: number):
    if number2 == 0:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
    if number2 == 1:
        basic.show_leds("""
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            """)
    if number2 == 2:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            """)
    if number2 == 3:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    if number2 == 4:
        basic.show_leds("""
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            """)
    if number2 == 5:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            """)
    if number2 == 6:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            """)
    if number2 == 7:
        basic.show_leds("""
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            """)
    if number2 == 8:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            """)
    if number2 == 9:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            """)
recieved_number = 0
recieving_number = False
current_number = 0

def button_a():
    global current_number
    current_number += 1
    if current_number == 10:
        current_number = 0
    show_number(current_number)
    basic.pause(100)
input.on_button_pressed(1, button_a)

def button_b():
    radio.send_number(current_number)
    basic.pause(100)
input.on_button_pressed(2, button_b)

def on_forever():
    global recieving_number
    if recieving_number:
        show_number(recieved_number)
        led.plot_brightness(0, 0, 20)
        led.plot_brightness(0, 4, 20)
        led.plot_brightness(4, 4, 20)
        led.plot_brightness(4, 0, 20)
        basic.pause(5000)
        recieving_number = False
    else:
        show_number(current_number)
basic.forever(on_forever)
