const form = document.querySelector('form');

//Funcion asincrona para obtener los datos del clima
const showweatherDetails = async (event) => {
    //Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById('weatherInfo');
    
    //Reemplaza con tu propia clave de API de OpenWeatherMap
    const apiKey = '03ba3c42e16c7b29999b3fa5f713b113';
    //Construye la URL de la API con la ciudad y la clave de API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    

    //Realiza la solicitud a la API y maneja la respuesta
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        //Verifica si la respuesta es exitosa, si no, lanza un error con el mensaje de la API
        if (!response.ok) {
            throw new Error(data.message);
        }
        
        weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Description: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        alert(error.message);
    }
    
}


form.addEventListener('submit', showweatherDetails);