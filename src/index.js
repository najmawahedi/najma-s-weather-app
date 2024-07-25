function changewethear(response) {
  console.log(response.data);

  let thecity = document.querySelector("#thecity");
  thecity.innerHTML = response.data.city;

  let todaytemperature = document.querySelector("#spcdegree");
  todaytemperature.innerHTML = Math.round(response.data.temperature.current);

  let condition = document.querySelector("#condition");
  condition.innerHTML = response.data.condition.description;

  let windspeed = document.querySelector("#windspeed");
  windspeed.innerHTML = response.data.wind.speed;

  let moist = document.querySelector("#moist");
  moist.innerHTML = response.data.temperature.humidity;

  let icon = document.querySelector("#icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" width="80px" alt="Weather icon" />`;

  let localTime = new Date(response.data.time * 1000);

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = weekdays[localTime.getDay()];
  let datee = localTime.getDate();
  let month = months[localTime.getMonth()];
  let year = localTime.getFullYear();
  let hours = localTime.getHours();
  let minutes = localTime.getMinutes();

  let timee = document.querySelector("#timee");
  timee.innerHTML = `${day}, ${datee} ${month}, ${year}`;

  let time = document.querySelector("#time");
  time.innerHTML = `${hours}:${minutesfixed(minutes)}`;
}

function minutesfixed(minutes) {
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes;
}

function citysearch(city) {
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=9d0d4df38e762b48ade23c7aefo5tbbd&units=metric`;
  axios.get(apiurl).then(changewethear);
}

document.querySelector("#searchForm").addEventListener("submit", cityname);

function cityname(event) {
  event.preventDefault();
  let cityelement = document.querySelector("#textcity");
  let thecity = document.querySelector("#thecity");
  thecity.innerHTML = cityelement.value;
  citysearch(cityelement.value);
}

function forecast(city) {
  let forecastapi = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=9d0d4df38e762b48ade23c7aefo5tbbd&units=metric`;
  console.log(forecastapi);
}
forecast("paris");
