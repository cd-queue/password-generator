const display = document.getElementById("display")
const button = document.getElementById("button")
let char = "abcdefghiklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTWXYZ1234567890@#$%"

button.addEventListener("click", () => {
    let value = "";
    for(let i = 0; i<12; i++) {
        let random = Math.floor(Math.random() * char.length)
        value = value + char[random]
    }

    display.value = value
});
