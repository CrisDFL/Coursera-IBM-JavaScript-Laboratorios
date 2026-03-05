// Ambito global
var globalVar = "Soy una variable global";
let globalLet = "Tambien soy una variable global, pero con ambito de let";
const globalConst = "Soy una constante global";

{
    // Ambito de bloque
    var blockVar = "Soy un var con ambito de bloque";
    let blockLet = "Soy un let con ambitp de bloque";
    const blockConst = "Soy un const con ambito de bloque";
}

// Alcance global
console.log(globalVar); // Salida: "Soy una variable global"
console.log(globalLet); // Salida: "También soy global, pero con alcance de let"
console.log(globalConst); // Salida: "Soy una constante global"

// Block Scope
//console.log(blockVar);
//console.log(blockLet);


function show () {
    var fuctionVar = "Soy una var con alcance de bloque";
    let fuctionLet = "Soy un let con alcande de bloque";
    const fuctionConst = "Soy un const con alcance de bloque";
}
show();

console.log(fuctionVar);
console.log(fuctionLet);
console.log(fuctionConst);


