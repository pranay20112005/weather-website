const apiKey = "YOUR_API_KEY_HERE";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherInfo = document.querySelector('.weather');

async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if(data.cod == "404"){
        document.querySelector('.error').style.display = 'block';
        weatherInfo.style.display = 'none';
    }else{
        document.querySelector('.error').style.display = 'none';
        weatherInfo.style.display = 'block';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        document.querySelector('.weather-description').innerHTML = data.weather[0].description;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});

window.addEventListener('load', ()=>{
    checkWeather('Durgapur');
});