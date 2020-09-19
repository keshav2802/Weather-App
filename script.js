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
