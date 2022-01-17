import { showAlert } from "./alert.js";

const input1 = document.querySelectorAll('input');
const button1 = document.getElementById('button');
const outputText1 = document.getElementById('outputText');

 (function (window) {
    const input2 = document.querySelectorAll('input');
    const button2 = document.getElementById('button');
    const outputText2 = document.getElementById('outputText');
    window.components = {
        input2,
        button2,
        outputText2
    }
    return window
})(window)
    
console.log(window.components);

input1.forEach(element => {
    element.classList.add('caja')
});

button1.addEventListener('click', (event) => showAlert(event, outputText1))
