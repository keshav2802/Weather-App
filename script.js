let APIKey = "60afae4ec5d9ef9c722137633aa66e6b";
let units = "metric";
let searchMethod = "q";

function searchWeather(searchTerm) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&appid=${APIKey}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  });
}

function init(result) {
  console.log(result);
  switch(result.weather[0].main) {
    case "Clear":
      document.body.style.backgroundImage = "url('img/clear.jpg')";
      break;
    case "Clouds":
      document.body.style.backgroundImage = "url('img/clouds.jpg')";
      break;
    case "Rain":
    case "Drizzle":
      document.body.style.backgroundImage = "url('img/rain.jpg')";
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = "url('img/thunderstorm.jpg')";
      break;
    case "Snow":
      document.body.style.backgroundImage = "url('img/snow.jpg')";
      break;
    case "Mist":
      document.body.style.backgroundImage = "url('img/mist.jpg')";
      break;
    default:
      break;
  }

  let cityName = document.getElementById("cityName");
  let temperature = document.getElementById("temperature");
  let weatherDescriptionHeader = document.getElementById("weatherDescriptionHeader");
  let icon = document.getElementById("icon");
  let windSpeed = document.getElementById("windSpeed");
  let humidity = document.getElementById("humidity");

  cityName.innerText = result.name;
  temperature.innerHTML = Math.floor(result.main.temp) + "&#176C";
  let weatherDescription = result.weather[0].description;
  weatherDescriptionHeader.innerText = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  icon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
  windSpeed.innerText = "Winds at " + Math.floor(result.wind.speed * 18/5) + " km/h";
  humidity.innerText = "Humidity levels at " + result.main.humidity + " %";
}

document.getElementById("searchButton").addEventListener('click', () => {
  let searchTerm = document.getElementById("searchInput").value;
  if(searchTerm)
    searchWeather(searchTerm);
})