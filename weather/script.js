let lon;
let lat;
let temperature = document.querySelector('.temp');
let summary = document.querySelector('.summary');
let loc = document.querySelector('.location');
let icon = document.querySelector('.icon');
const kelvin = 273;


window.addEventListener("load", () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;


            // API ID

            const api = "ca24f43682581835e575ea6e0b213d75";

            // APi url 
            const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + 
            `lon=${lon}&appid=ca24f43682581835e575ea6e0b213d75`;

            // calling the api
            fetch(base).then((response) => {
                return response.json();
            })
            .then((data) => { 
                console.log(data); 
                temperature.textContent =  
                    Math.floor(data.main.temp - kelvin) + "°C"; 
                summary.textContent = data.weather[0].description; 
                loc.textContent = data.name + "," + data.sys.country; 
                let icon1 = data.weather[0].icon; 
                icon.innerHTML =  
                    `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
            })
        });
    }
});
