let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDate = document.querySelector("#current-date");
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentDate.innerHTML = `Last updated: ${day}, ${hour}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp);
  document.querySelector("#current-humidity").innerHTML =
    response.data.main.humidity;
    document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
    let iconElement= document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn${response.data.weather[0].icon}@2x.png`)
}

function inputCity(event) {
  event.preventDefault();
  let apiKey = "3cbe34899ba9cdaea2a1be7e83c6edee";
  let currentCity = document.querySelector("#search-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", inputCity);
