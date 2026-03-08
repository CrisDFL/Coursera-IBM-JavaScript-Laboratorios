let count = 0; 

increaseCount = () => {
    count++;
    displayCount();
    checkCountValue();
}
//-----------------------------------------------------
checkCountValue = () => {
    if(count===10){
        alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");
    } else if(count===20){
        alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
    }
}
//-------------------------------------------------------
resetCount = () => {
    count = count - count;
    displayCount();
    alert("Se ha restablecido correctamente");
}
//------------------------------------------------------
displayCount = () => {
    document.getElementById("countDisplay").innerHTML = count;
}