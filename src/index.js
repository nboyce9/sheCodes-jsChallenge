let now = new Date();

let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let dayTime = document.querySelector("#date-time");
dayTime.innerHTML = `${day} ${hour}:${minutes}`;


