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
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" width="100px" alt="Weather icon" />`;

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

  forecast(response.data.city);
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
  axios.get(forecastapi).then(forecastwethear);
}

function forecastwethear(response) {
  console.log(response.data);
  let high = document.querySelector("#high");
  high.innerHTML = Math.round(response.data.daily[0].temperature.maximum);
  let low = document.querySelector("#low");
  low.innerHTML = Math.round(response.data.daily[0].temperature.minimum);

  let localTime = new Date(response.data.daily[1].time * 1000);

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let firstday = weekdays[localTime.getDay()];
  let firstdayname = document.querySelector("#firstdayname");

  firstdayname.innerHTML = firstday;

  let firstdaytemphigh = document.querySelector("#firstdaytemphigh");
  firstdaytemphigh.innerHTML = Math.round(
    response.data.daily[1].temperature.maximum
  );
  let firstdaytemplow = document.querySelector("#firstdaytemplow");
  firstdaytemplow.innerHTML = Math.round(
    response.data.daily[1].temperature.minimum
  );

  let firstdaycondition = document.querySelector("#firstdaycondition");
  firstdaycondition.innerHTML = response.data.daily[1].condition.description;

  let firstdaywindspeed = document.querySelector("#firstdaywindspeed");
  firstdaywindspeed.innerHTML = response.data.daily[1].wind.speed;

  let firstdaymoist = document.querySelector("#firstdaymoist");
  firstdaymoist.innerHTML = response.data.daily[1].temperature.humidity;

  let firstdayicon = document.querySelector("#firstdayicon");
  firstdayicon.innerHTML = `<img src="${response.data.daily[1].condition.icon_url}" width="70px" hight="30px" alt="Weather icon" />`;

  let localTime1 = new Date(response.data.daily[2].time * 1000);

  let secondday = weekdays[localTime1.getDay()];
  let seconddayname = document.querySelector("#seconddayname");

  seconddayname.innerHTML = secondday;

  let seconddaytemphigh = document.querySelector("#seconddaytemphigh");
  seconddaytemphigh.innerHTML = Math.round(
    response.data.daily[2].temperature.maximum
  );
  let seconddaytemplow = document.querySelector("#seconddaytemplow");
  seconddaytemplow.innerHTML = Math.round(
    response.data.daily[2].temperature.minimum
  );

  let seconddaycondition = document.querySelector("#seconddaycondition");
  seconddaycondition.innerHTML = response.data.daily[2].condition.description;

  let seconddaywindspeed = document.querySelector("#seconddaywindspeed");
  seconddaywindspeed.innerHTML = response.data.daily[2].wind.speed;

  let seconddaymoist = document.querySelector("#seconddaymoist");
  seconddaymoist.innerHTML = response.data.daily[2].temperature.humidity;

  let seconddayicon = document.querySelector("#seconddayicon");
  seconddayicon.innerHTML = `<img src="${response.data.daily[2].condition.icon_url}" width="70px" hight="30px" alt="Weather icon" />`;

  let localTime2 = new Date(response.data.daily[3].time * 1000);

  let thirdday = weekdays[localTime2.getDay()];
  let thirddayname = document.querySelector("#thirddayname");

  thirddayname.innerHTML = thirdday;

  let thirdaytemphigh = document.querySelector("#thirdaytemphigh");
  thirdaytemphigh.innerHTML = Math.round(
    response.data.daily[3].temperature.maximum
  );
  let thirddaytemplow = document.querySelector("#thirddaytemplow");
  thirddaytemplow.innerHTML = Math.round(
    response.data.daily[3].temperature.minimum
  );

  let thirddaycondition = document.querySelector("#thirddaycondition");
  thirddaycondition.innerHTML = response.data.daily[3].condition.description;

  let thirddaywindspeed = document.querySelector("#thirddaywindspeed");
  thirddaywindspeed.innerHTML = response.data.daily[3].wind.speed;

  let thirddaymoist = document.querySelector("#thirddaymoist");
  thirddaymoist.innerHTML = response.data.daily[3].temperature.humidity;

  let thirddayicon = document.querySelector("#thirddayicon");
  thirddayicon.innerHTML = `<img src="${response.data.daily[3].condition.icon_url}" width="70px" hight="30px" alt="Weather icon" />`;

  let localTime3 = new Date(response.data.daily[4].time * 1000);

  let forthday = weekdays[localTime3.getDay()];
  let forthdayname = document.querySelector("#forthdayname");

  forthdayname.innerHTML = forthday;

  let forthdaytemphigh = document.querySelector("#forthdaytemphigh");
  forthdaytemphigh.innerHTML = Math.round(
    response.data.daily[4].temperature.maximum
  );
  let forthdaytemplow = document.querySelector("#forthdaytemplow");
  forthdaytemplow.innerHTML = Math.round(
    response.data.daily[4].temperature.minimum
  );

  let forthdaycondition = document.querySelector("#forthdaycondition");
  forthdaycondition.innerHTML = response.data.daily[4].condition.description;

  let forthdaywindspeed = document.querySelector("#forthdaywindspeed");
  forthdaywindspeed.innerHTML = response.data.daily[4].wind.speed;

  let forthdaymoist = document.querySelector("#forthdaymoist");
  forthdaymoist.innerHTML = response.data.daily[4].temperature.humidity;

  let forthdayicon = document.querySelector("#forthdayicon");
  forthdayicon.innerHTML = `<img src="${response.data.daily[4].condition.icon_url}" width="70px" hight="30px" alt="Weather icon" />`;

  let localTime4 = new Date(response.data.daily[5].time * 1000);

  let fifthday = weekdays[localTime4.getDay()];
  let fifthdayname = document.querySelector("#fifthdayname");

  fifthdayname.innerHTML = fifthday;

  let fifthdaytemphigh = document.querySelector("#fifthdaytemphigh");
  fifthdaytemphigh.innerHTML = Math.round(
    response.data.daily[5].temperature.maximum
  );
  let fifthdaytemplow = document.querySelector("#fifthdaytemplow");
  fifthdaytemplow.innerHTML = Math.round(
    response.data.daily[5].temperature.minimum
  );

  let fifthdaycondition = document.querySelector("#fifthdaycondition");
  fifthdaycondition.innerHTML = response.data.daily[5].condition.description;

  let fifthdaywindspeed = document.querySelector("#fifthdaywindspeed");
  fifthdaywindspeed.innerHTML = response.data.daily[5].wind.speed;

  let fifthdaymoist = document.querySelector("#fifthdaymoist");
  fifthdaymoist.innerHTML = response.data.daily[5].temperature.humidity;

  let fifthdayicon = document.querySelector("#fifthdayicon");
  fifthdayicon.innerHTML = `<img src="${response.data.daily[5].condition.icon_url}" width="70px" hight="30px" alt="Weather icon" />`;
}
