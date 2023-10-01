const numero2 = document.querySelector("#numero2")

const numero1 = document.querySelector("#numero1")

const numero3 = document.querySelector("#numero3")

let number1 = 21

let number2 = 39

let index = 0

numero2.textContent = number2

numero1.textContent = number1

console.log(numero2);

const pararTempo = setInterval(() => {

    index++

    numero3.textContent = index

    if (index > 59) {

        index = 0

        number2++

        numero2.textContent = number2
    }

    if (number2 > 59) {

        number2 = 0
        numero2.textContent = number2
        number1 += 1

        numero1.textContent = number1
    }

}, 1000)