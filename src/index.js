let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let dayTime = document.querySelector("#date-time");
dayTime.innerHTML = `${day} ${hour}:${minutes}`;

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);
