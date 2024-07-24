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
}

function citysearch(city) {
  let cityelement = document.querySelector("#textcity");
  query = cityelement.value;
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=9d0d4df38e762b48ade23c7aefo5tbbd&units=metric`;
  axios.get(apiurl).then(changewethear);
}
document.querySelector("#searchForm").addEventListener("submit", cityname);

function cityname(event) {
  event.preventDefault();
  let cityelement = document.querySelector("#textcity");
  //   console.log(city);
  let thecity = document.querySelector("#thecity");
  thecity.innerHTML = cityelement.value;
  citysearch(cityelement.value);
}
