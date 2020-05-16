var five = require("johnny-five")

const board = new five.Board();
let bombillo
let celda
let servo
board.on("ready", encender)

function encender(){
    bombillo = new five.Led(12);
 
    let configuracion = {pin: "A5", freq: 50}
    celda = new five.Sensor(configuracion)
    celda.on("change", play)
    servo = new five.Servo(9)
    servo.to(120)
    
    play();
}

const play = () => {
    if(celda.value < 390){
        console.log(`Espera T-Rex ${celda.value}`)
        servo.to(110)
         bombillo.off()

    }else{
        console.log(`Salta T-Rex  ${celda.value }`)
        bombillo.on()
        servo.to(90)
    }
}