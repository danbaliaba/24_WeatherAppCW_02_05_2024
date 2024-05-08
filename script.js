const API_KEY = "32852a0bf45122761fc74d972084167f";
const city = document.getElementById("locationInput");
const btn = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

btn.onclick = () => {
  const cityName = city.value.trim();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((weather) => displayWeather(weather));

  city.value = "";
};

function displayWeather({
  name,
  main: { temp },
  weather: [{ description, icon }],
  wind: { speed: speedOfWind },
  sys:{sunrise, sunset}
}) {
  const sunriseTime = new Date(sunrise * 1000)
  const sunsetTime = new Date(sunset * 1000)

  weatherContainer.innerHTML = `
    <h2>${name}</h2> 
    <img src="https://openweathermap.org/img/wn/${icon}.png"/>
    <p>Temperature: ${temp} ℃</p>
    <p>Description: ${description}</p>
    <p>Speed of wind: ${speedOfWind} m/s</p>
    <p>Sunrise: ${sunriseTime.getHours()}:${sunriseTime.getMinutes()}:${sunriseTime.getSeconds()}</p>
    <p>Sunset: ${sunsetTime.getHours()}:${sunsetTime.getMinutes()}:${sunsetTime.getSeconds()}</p>
    `;
    weatherContainer.classList.add("weatherContainer")
}
