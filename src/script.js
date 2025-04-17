function updateTime() {
  //For the chosen location

  let chosenLocation = document.querySelector("#chosen-location");
  let chosenDate = chosenLocation.querySelector(".date");
  let chosenTime = chosenLocation.querySelector(".time");
  let chosenLocationTime = moment().tz("America/Los_Angeles");

  chosenDate.innerHTML = moment().format("MMMM Do YYYY");
  chosenTime.innerHTML = `${chosenLocationTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  //for the current location

  let currentLocation = document.querySelector("#current-location");
  let currentDate = currentLocation.querySelector(".date");
  let currentTime = currentLocation.querySelector(".time");
  //let currentLocationTime = moment.tz.guess();
  //moment.tz("Africa/Johannesburg");

  currentDate.innerHTML = moment().format("MMMM Do YYYY");
  currentTime.innerHTML = moment
    .tz(moment.tz.guess())
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
