let testText = "El rápido zorro marrón salta sobre el perro perezoso.";
let startTime, endTime;

const btnStart = document.getElementById('startTest');

btnStart.addEventListener(('click'), () => {
    //Establecer el texto de prueba
    document.getElementById('inputText').value = testText;

    //Reiniciar entrada y salida del usuario
    const userInput = document.getElementById('userInput');
    userInput.value = "";
    userInput.focus();
    userInput.readOnly = false;

    document.getElementById('output').innerHTML = "";

    //Iniciar Temporizador
    startTime = new Date().getTime();
});

const btnEnd =  document.getElementById('endTest');
btnEnd.addEventListener(('click'), () => {
    //Finalizar Temporizador
    endTime = new Date().getTime();

    document.getElementById('userInput').readOnly = true;

    //Calcular el tiempo transcurrido y las palabras por minuto
    var timeElapsed = (endTime - startTime) / 1000; //en segundos

    var userTypedText = document.getElementById('userInput').value;
    var totalLength = userTypedText.length;
    //Dividir el texto usando regex para contar las palabras correctamente
    var typedWords = userTypedText.split(/\s+/).filter((word) => {
        return word !== "";
    }).length;

    var wpm = 0; //Valor por defecto

    if(timeElapsed > 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }
    var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Resultados de la Prueba de Escritura:</h2>" +
                "<p>Longitud: " + totalLength + "</p>" +
                "<p>Palabras Escribidas: " + typedWords + "</p>" +
                "<p>Tiempo Transcurrido: " + timeElapsed.toFixed(2) + " segundos</p>" +
                "<p>Palabras Por Minuto (WPM): " + wpm + "</p>";
            

});
