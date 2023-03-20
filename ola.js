const btn = document.getElementById('btn1')
const input1 = document.querySelector('#num1')
const input2 = document.querySelector('#num2')
const resul = document.querySelector('#resultado')

btn.addEventListener('click',btnOnClick)

function btnOnClick(){
    const suma = Number(input1.value) + Number(input2.value);
    resul.innerHTML = suma
}
alert(">:V")