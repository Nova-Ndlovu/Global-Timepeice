function updateTime() {
  //For the chosen location

  let chosenLocation = document.querySelector("#chosen-location");
  if (chosenLocation) {
    let chosenDate = chosenLocation.querySelector(".date");
    let chosenTime = chosenLocation.querySelector(".time");
    let chosenLocationTime = moment().tz("America/Los_Angeles");

    chosenDate.innerHTML = moment().format("MMMM Do YYYY");
    chosenTime.innerHTML = `${chosenLocationTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  //for the current location

  let currentLocation = document.querySelector("#current-location");
  let currentCity = currentLocation.querySelector(".name");
  let currentDate = currentLocation.querySelector(".date");
  let currentTime = currentLocation.querySelector(".time");
  //let currentLocationTime = moment.tz.guess();
  //moment.tz("Africa/Johannesburg");

  currentCity.innerHTML = moment.tz.guess().replace("_", " ").split("/")[1];
  currentDate.innerHTML = moment().format("MMMM Do YYYY");
  currentTime.innerHTML = moment
    .tz(moment.tz.guess())
    .format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let chosenCityTimezone = event.target.value;
  if (chosenCityTimezone === "current") {
    chosenCityTimezone = moment.tz.guess();
  }
  let chosenCityName = chosenCityTimezone.replace("_", " ").split("/")[1];
  let chosenCityTime = moment().tz(chosenCityTimezone);
  let chosenCity = document.querySelector("#chosen-location");
  chosenCity.innerHTML += `<div>
          <h2 class="name">${chosenCityName}</h2>
          <div class="date">${chosenCityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${chosenCityTime.format(
          "h:mm:ss"
        )}<small>${chosenCityTime.format("A")}</small></div>
      </div>`;
}

updateTime();
setInterval(updateTime, 1000);
setInterval(updateCity, 1000);

let chosenLocationSelect = document.querySelector("#location");
chosenLocationSelect.addEventListener("change", updateCity);
