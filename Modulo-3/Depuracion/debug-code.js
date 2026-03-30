
const btn = document.getElementById('performOperation');

btn.addEventListener(('click'), () => {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if(!isNaN(num1) && !isNaN(num2)){
        const result = multiply(num1, num2);
        displayResult(result);
    }
    else {
        displayResult('Ingresa un numero valido');
    }
});


multiply = (num1, num2) => {
    debugger;
    return num1*num2;
}
displayResult = (result) => {
    const textoR = `El resultado de la operacion es: ${result}`;
    document.getElementById('result').textContent = textoR;
}