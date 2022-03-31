const Celsius = document.querySelector('#Celsius');
const Fahrenheit = document.querySelector('#Fahrenheit');
const Kelvin = document.querySelector('#Kelvin');
const Exp = document.querySelector('main');

Celsius.oninput = function () {
    let valueC = (parseFloat(Celsius.value))
    Fahrenheit.value = (valueC * 9/5 + 32 ).toFixed(2)
    Kelvin.value = (valueC + 273.15).toFixed(2)
}

Fahrenheit.oninput = function () {
    let valueF = (parseFloat(Fahrenheit.value))
    Celsius.value = ((valueF  - 32) * 5/9).toFixed(2)
    Kelvin.value = ((valueF + 459.67) * 5/9).toFixed(2)
}

Kelvin.oninput = function () {
    let valueK = (parseFloat(Kelvin.value))
    Celsius.value = (valueK - 273.15).toFixed(2)
    Fahrenheit.value = (valueK * 9/5 - 459.67).toFixed(2)
}