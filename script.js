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
      document.body.style.backgroundImage = "url('img/cloudy.jpg')";
      break;
    case "Rain":
    case "Drizzle":
      document.body.style.backgroundImage = "url('img/rain.jpg')";
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = "url('img/storm.jpg')";
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
}

document.getElementById("searchButton").addEventListener('click', () => {
  let searchTerm = document.getElementById("searchInput").value;
  if(searchTerm)
    searchWeather(searchTerm);
})