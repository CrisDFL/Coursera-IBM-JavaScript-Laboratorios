let btn = document.getElementById("btn");
let em;

btn.addEventListener("click", () => {
    em = document.getElementById("name").value;
    switch (em){
        case "empleado":
            document.getElementById("texto").textContent = "Tienes todo el acceso a servicios dieteticos :D";
            break;
        case "miembro inscrito":
            document.getElementById("texto").textContent = "Tienes accesos a los servicios dieteticos y a interaccion con dentista :3";
            break;
        case "subscriptor":
            document.getElementById("texto").textContent = "Solo tienes acceso a una parte del servicio dietetico";
            break;
        default:
            document.getElementById("texto").textContent = "Necesitas inscripirte mi bro";
            break;
    }
});


