
let celsiusInput = document.querySelector("#celsius > input")
let fahrenheitInput = document.querySelector("#fahrenheit > input")
let kelvinInput = document.querySelector("#kelvin > input")
let button = document.querySelector(".btn > button")

const roundNumber = (number) => {
    return Math.round(number * 100) / 100
}
celsiusInput.addEventListener("input", () => {
    let cTemp = parseFloat(celsiusInput.value)
    let cToFahr = (cTemp * (9 / 5)) + 32
    let kTemp = cTemp + 273.15
    console.log(cToFahr)

    fahrenheitInput.value = roundNumber(cToFahr)
    kelvinInput.value = roundNumber(kTemp)
})


fahrenheitInput.addEventListener("input", () => {
    let cToFahr = parseFloat(fahrenheitInput.value)
    let cTemp = (cToFahr - 32) * (5 / 9)
    let kTemp = (cToFahr - 32) * (5 / 9) + 273.15


    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

kelvinInput.addEventListener("input", () => {
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let cToFahr = (kTemp - 273.15) * (9 / 5) + 32
    console.log(cToFahr)

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(cToFahr)
})

button.addEventListener("click", function () {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})